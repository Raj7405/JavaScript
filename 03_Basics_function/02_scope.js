/** 
JavaScript variables have 3 types of scope:

Block scope:- {} ,let or const
Function scope:- local scope
Global scope:- global one using "var" All scripts and functions on a web page can access it. 
*/


//two way to declare function 

myFunc1(5);
function myFunc1(num){
    return num + 1
}

//it will give error for not declarin varible of function before using it
myFunc2(5)
const myFunc2 = function(num){
    return num + 2
}
