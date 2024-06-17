'use strict';

// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎆 Start guessing...';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 18;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable as this is a part of the state of our application hence
//better to store our data in our code rather than holding it in the DOM. :)
console.log(secretNumber);

console.log(document.querySelector('.again').textContent);

document.querySelector('.check').addEventListener('click', function () {
  // document.querySelector('.again').textContent = 'Try Again !!!';
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //condition for edge case
  if (!guess) {
    // alert('Please enter a valid value');
    document.querySelector('.message').textContent =
      'Please enter a non zero no.';
  } else if (guess === secretNumber) {
    //condition when the value is correct - when this happens we want to change the CSS too with DOM
    document.querySelector('.message').textContent = 'Correct Number!!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    //increasing the width of the result
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    //in case where no. is high than the secretNumber
    document.querySelector('.message').textContent = 'No. is high';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    //in case when the guess is low than the secretNumber
    document.querySelector('.message').textContent = 'No. is Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score <= 0) {
    document.querySelector('.message').textContent = 'U lost the game!!:(';
    document.querySelector('.score').textContent = 0;
  }
});

//condition for clicking the again button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = 'blank';
  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('.number').style.width ='15rem';
});
