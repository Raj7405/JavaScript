function multiplrBy5(num){
    return num*5
}

multiplrBy5.power = 2
console.log(multiplrBy5.power);
console.log(multiplrBy5(5));
console.log(multiplrBy5.prototype);

function createUser(userName, score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 20);
/**

 -> When ever i will call "createUser" function it will create new instance of object
 
 -> where "this" keyword are use to define current context

*/
const tea = new createUser("tea", 10);

chai.printMe();
/**
 -> here on calling manually define method using "prototype", when it called it will console.log the score of chai, to know that it need to use "score" of "chai" object it use "this" keyword

 -> "this" keyword shows current context of "chai" object
 
 -> 'jis' is 'this'

 -> "jis ka call hoga vusi ka context hoga" - "this"
*/


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/