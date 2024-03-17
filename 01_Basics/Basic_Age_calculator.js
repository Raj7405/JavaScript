let currentDate = Date.now()

let myBob = new Date('02 december 2001')
// console.log(myBob.getTime());
// console.log(currentDate);

let myAge = Math.floor((currentDate - myBob)/31557600000)

console.log(`${myAge} years`);

function calculateAge(bob){
    // let currentDate = new Date("03-17-2024")
    let currentDate = Date.now()
    let age = currentDate - bob
    console.log(`
    ${Math.floor(age/(1000*60*60*24*365))} year
    ${Math.floor(age/(1000*60*60*24))} days 
    ${Math.floor(age/(1000*60*60))} hours 
    ${Math.floor(age/(1000*60))} minites
    ${Math.floor(age/(1000))}  seconds
    `)
}

calculateAge(myBob)