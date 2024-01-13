//obejrct literals

const mySym = Symbol("key1")

const JsUser = {
    name: "raj",
    "full name": "Rajendra Mohan Chaudhari",
    [mySym]: "mykey1",
    age: 21,
    location: "Ankleshwar",
    email: "raj@google.com",
    isLogged: false,
    lastloginDays:["monaday","saturday"]
}

//to acces symbol from object
console.log(JsUser[mySym]);

//Two ways to acess object
//console.log(JsUser.email);            //way 1
//console.log(JsUser["email"]);         //way 2
//console.log(JsUser.lastloginDays);
//console.log(JsUser["lastloginDays"]);

//to make change in object 
JsUser.age = 22
console.log(JsUser["age"]);

//to make obejct immutable or freeze
/*
Object.freeze(JsUser)
JsUser.age = 54
console.log(JsUser["age"]);
*/

//to use function in object
JsUser.greeting = function(){
    console.log("Hellow Js User!!!!");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this["full name"]}!!!`);  //"this" keyword is use to refer to element from particular obejct
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());