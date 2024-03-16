
let myDate = new Date()

//   console.log(myDate);
//   console.log(myDate.toString());
//   console.log(myDate.toDateString());
//   console.log(myDate.toLocaleDateString());
//   console.log(typeof myDate);

let myCreateDate = new Date("12-2-2001")
console.log(myCreateDate.toLocaleString());

// Date.now() is a static method of the Date object.
// You cannot use it on a date like myDate.now()
// The syntax is always Date.now().
let myTimestamp =Date.now()
console.log(myTimestamp);

//getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
let newTime = myCreateDate.getTime()
console.log(newTime)
let age = myTimestamp - newTime
console.log(Math.floor(age/(1000*60*60*24*365)));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(newDate.getHours());
// console.log(newDate.getFullYear());
// console.log(newDate.getUTCHours());


//create obeject of date

// let a = newDate.toLocaleString('default', {
//     weekday: "short",
//     year: "2-digit"
// })

// console.log(a);
