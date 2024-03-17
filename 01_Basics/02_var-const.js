//to defined constant value
const accountId=2001
/**
 In JavaScript, the const keyword does not make a variable immutable (unchangeable), 
 but rather it prevents reassignment of the variable itself. 
 This means that you cannot assign a new value to a variable declared with const,
 but you can modify the content of a variable that holds a mutable data type, such as an array or object
 */

//to prevent block scoping issue in Js
let accountEmail="raj@gmail.com"

//normal way of declaring Varible
var accountName="Rajendra"

//we can declare varible without keyword
accountCity="Mumbai"


//varible without value will be by default "undefined"
let accountState;

console.table([accountEmail,accountId,accountName,accountCity,accountState])