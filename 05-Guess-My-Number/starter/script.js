'use strict';

// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎆 Start guessing...';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 18;
// console.log(document.querySelector('.guess').value);

console.log(document.querySelector('.again').textContent);

document.querySelector('.check').addEventListener('click', function () {
  // document.querySelector('.again').textContent = 'Try Again !!!';
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess, guess);

  if (!guess) {
    // alert('Please enter a valid value');
    document.querySelector('.message').textContent = 'Please enter a non zero no.';
  }

});
