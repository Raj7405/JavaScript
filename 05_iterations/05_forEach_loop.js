const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) => {
//     console.log(item);
// })                                      

function printMe(item){
    console.log(item);
}

coding.forEach((item, index, Arr) => {
    //console.log(`${item} on index no. ${index} in array ${Arr}`);
    // console.log(item, index, Arr);
    console.log(item + "on index no." + index + "in array" + Arr);
})
//coding.forEach(printMe)

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  staffsDetails.forEach((staff) => {
    console.log(staff.name);
  })

  //now destructuring array object
  staffsDetails.forEach(({name,age})=>{
    let sentance = `${name}'s age is ${age}`
    console.log(sentance)
  })