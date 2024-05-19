
//This how map function work behind the scene

Array.prototype.calculate = function(logic){
   
    let output = [];
    for(let i = 0; i < this.length; i++){
         output.push(logic(this[i]))
    }
    return output;
}


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

console.log(radius.calculate(area))
console.log(radius.calculate(Circumference))
console.log(radius.calculate(Diameter))