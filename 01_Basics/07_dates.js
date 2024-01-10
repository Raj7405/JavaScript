
let myDate = new Date()

//   console.log(myDate);
//   console.log(myDate.toString());
//   console.log(myDate.toDateString());
//   console.log(myDate.toLocaleDateString());
//   console.log(typeof myDate);

// let myCreateDate = new Date("12-2-2001")
// console.log(myCreateDate.toLocaleString());

// let myTimestamp =Date.now()
// console.log(myTimestamp);
// let newTime = .getTime()
// console.log(myTimestamp - newTime);

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(newDate.getHours());
// console.log(newDate.getFullYear());
// console.log(newDate.getUTCHours());


//create obeject of date

let a = newDate.toLocaleString('default', {
    weekday: "short",
    year: "2-digit"
})

console.log(a);
