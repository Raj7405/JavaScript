//higher order function are those function which take other function(call back function) as argument or rturn function as return value

console.log("start")

let radius = [3,2,4,5];

const area = function(rad){
    return Math.PI * rad * rad
}
const Circumference = function(rad){
    return 2 * Math.PI  * rad
}
const Diameter = function(rad){
    return 2 * rad
}

//main function
const calculate = function(arr, logic){
    let output = [];
    for(let i = 0; i < arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output;
}


console.log("Area of given radius", calculate(radius, area))
console.log("Circumference of given radius", calculate(radius,Circumference))    
console.log("Diameter of given radius", calculate(radius,Diameter))
