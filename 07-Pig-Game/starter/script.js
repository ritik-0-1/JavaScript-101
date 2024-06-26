'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--Hold');

const scores = [0, 0];

//starting point
score0El.textContent = 0;
score1El.textContent = 0; //despite using number it'll be converted to string
diceEl.classList.add('hidden'); //this could also be done in HTML doc through Inline css but here
//we are manipulating DOM using classes by adding the property for that in class and imposing that
//class on the element through the classList.add feature of JS.

// const rollDice = 1;
//rolling Dice Functionality
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  //1.Generating the random no. b/w 1 & 6
  const dice = Math.trunc(Math.random() * 6) + 1;
  ``;
  console.log(dice);
  //2. Displaying the same picture as per the number
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. check for the rolled 1, if true then switch player else add score

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //dynamically changing it to change the player from 0->1 and vice versa
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

