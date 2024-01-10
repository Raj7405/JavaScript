let currentDate = Date.now()

let myBob = new Date('02 december 2004')
// console.log(myBob.getTime());
// console.log(currentDate);

let myAge = Math.floor((currentDate - myBob)/31557600000)

console.log(`${myAge} years`);