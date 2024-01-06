//two types of data type base on how data is store and acess in memory

//1.primitive
/*
  7 types:-String, Number, Boolean, Null, undefined, BigInt
*/

const id = 7007
const id2 = "7007"
const isId = true
const temp = null
const newId = undefined
const BigNumber = 40854098208n
const unique1 = Symbol("12")
const unique2 = Symbol("12")

console.log(unique1 == unique2);
console.log(typeof newId);

//2.non-primitive Or Refrence type
/*
    Arrays
    Objects
    Function
*/

const anime = ["Naruto", "Boruto", "One piece"];
const MyFuction = function(){
    console.log("Hello World");
}
let MyObj= {
    name: "Raj",
    age: 22,
}

console.log(MyObj);
console.log(MyFuction);