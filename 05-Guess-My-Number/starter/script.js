'use strict';

// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎆 Start guessing...';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 18;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable as this is a part of the state of our application hence 
//better to store our data in our code rather than holding it in the DOM. :)
console.log(secretNumber);

console.log(document.querySelector('.again').textContent);

document.querySelector('.check').addEventListener('click', function () {
  // document.querySelector('.again').textContent = 'Try Again !!!';
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  
  if (!guess) {
    // alert('Please enter a valid value');
    document.querySelector('.message').textContent = 'Please enter a non zero no.';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';

  }else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'No. is high';
    score--;
    document.querySelector('.score').textContent = score;

  }else{
    document.querySelector('.message').textContent = 'No. is Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if(score<=0){
    document.querySelector('.message').textContent = "U lost the game!!:(";
    document.querySelector('.score').textContent = 0;
  }

});
