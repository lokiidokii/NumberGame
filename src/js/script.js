'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

  //check button - guessing the number
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
      displayMessage('No Number Selected!');
    } 

    //when player wins
    else if (guess === secretNumber) {
      displayMessage(`CORRECT! ${secretNumber} Is The Number!`);

      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      //keep track of highscore
      if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } 

    //when guess is wrong
    else if (guess !== secretNumber) {
      if(score > 1){
      displayMessage(guess > secretNumber ? 
        'TOO HIGH! Guess Again' : 'TOO LOW! Guess Again');
      score--;
      console.log(document.querySelector('.score').textContent = score);
    } 
    else {
      displayMessage('☹️ YOU LOST THE GAME ☹️');
      score--;
      console.log(document.querySelector('.score').textContent = 0);
      document.querySelector('body').style.backgroundColor = '#FF3C3C';
    }
    }
  }) ;

//Start over button
 document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
