const num = Math.PI
console.log(num);

const balance = new Number(100);
console.log(balance);
 
console.log(balance.toString().length); //convert number into string

//to fixed the number range after the decimal point
console.log(num.toFixed(5));

const newNum =  143.2312
//it will retrurn the number by rounding it off. and count will be as per argument
console.log(newNum.toPrecision(4));

//it increse the readeblity of big number by specifing commas
const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN')); // output => 1,00,00,00,000

//++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++

console.log("\nFROM HERE MATHS SEACTION WILL START.......");

//random value genrator btw 0 to 1
console.log(Math.random());

//to genrate random value 1 to 10
console.log((Math.random()*10)+1);

//to genrate random value from 1 to 10 in integer form
console.log((Math.floor(Math.random()*10)+1));


// to genrate randopm valur from min to max number
const min = 1
const max = 6 

// console.log(Math.floor((Math.random()*(max-min+1))+min));
