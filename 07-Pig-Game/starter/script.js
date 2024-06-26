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
const btnHold = document.querySelector('.btn--hold');

//starting point
let scores, currentScore, activePlayer, playing;
const init = function () {
  //rolling Dice Functionality
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0; //despite using number it'll be converted to string
  //we are manipulating DOM using classes by adding the property for that in class and imposing that
  //class on the element through the classList.add feature of JS.
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); //this could also be done in HTML doc through Inline css but here
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  //if we are playing then only these conditions are valid.
  if (playing) {
    //1.Generating the random no. b/w 1 & 6
    const dice = Math.trunc(Math.random() * 6) + 1;
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
      switchPlayer();
    }
  }
});

//Adding the hold functionality:
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add the currentScore to activePlayer score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. If the score is >=100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      //finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. If not switch to next player
      switchPlayer();
    }
  }
});

//resetGame
btnNew.addEventListener('click', init);
