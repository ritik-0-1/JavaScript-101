'use strict';

// let hasDriverLiscence =  true;
// const passTest = false;

// if(passTest) hasDriverLiscence = true;
// if(hasDriverLiscence) console.log("I can drive well :D");

// // const interface = 'Audio';
// // console.log(interface);

// function logger() {
//     console.log("I am Ritik from inside the logger function");
// }
// // calling, running or envoking the function
// logger();
// // logger();
// // logger();

// function fruitProcessor (apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     // console.log(juice) ;l
//     return juice;
// }

// console.log(fruitProcessor(5,6));

// console.log(Number('23'));

// // Arrow function
// const juiceProcessor= (apples, oranges) =>{
//     return `I want Juice with ${apples} apples and ${oranges} oranges.` ;
// }

// console.log(juiceProcessor(3,5));

// const calcAverage = (score1, score2, score3) => score1+score2+score3/3;

// const scoreDolphins = calcAverage(44,23,72);
// const scoreKoalas =  calcAverage(65,54,49);

// function checkWinner ( avgDolphins, avgKoalas){
//     if(avgKoalas >= avgDolphins*2){
//         console.log( `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
//     }else if(avgKoalas*2 <= avgDolphins){
//         console.log( `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
//     }else{
//         console.log(`No team wins...`)
//     }
// }

// console.log( checkWinner(scoreDolphins, scoreKoalas));

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) `
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}) `
  );
}

console.log('ritik');

const x = '23';
