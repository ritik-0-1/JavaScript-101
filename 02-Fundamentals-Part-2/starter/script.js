'use strict';

let hasDriverLiscence =  true;
const passTest = false;

if(passTest) hasDriverLiscence = true;
if(hasDriverLiscence) console.log("I can drive well :D");

// const interface = 'Audio';
// console.log(interface);

function logger() {
    console.log("I am Ritik from inside the logger function");
}
// calling, running or envoking the function
logger();
// logger();
// logger();

function fruitProcessor (apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    // console.log(juice) ;l
    return juice;
}

console.log(fruitProcessor(5,6)); 

console.log(Number('23'));