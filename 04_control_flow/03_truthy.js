// const userEmail = "ra@g.com"
const userEmail = []
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//To check wether is array empty or not!!
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//To check object is empty or not
const myObj = {}

if(Object.keys(myObj).length == 0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined


let val1 
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 5
val1 = null ?? 10 ?? 20

console.log(val1);


//Terinary operators

//condition ? true : false

const icePrice = 100 
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80") 