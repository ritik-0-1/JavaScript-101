'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold  = document.querySelector('.btn--Hold');



//starting point
score0El.textContent=0;
score1El.textContent=0; //despite using no it'll be converted to string
diceEl.classList.add('hidden'); //this could also be done in HTML doc through Inline css but here
//we are manipulating DOM using classes by adding the property for that in class and imposing that
//class on the element through the classList.add feature of JS.

// const rollDice = 1;
//rolling Dice Functionality

btnRoll.addEventListener('click', function(){
    //1.Generating the random no. b/w 1 & 6
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Displaying the same picture as per the number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. check for the rolled 1, if true then switch player else add score
    
});