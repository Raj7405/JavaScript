const user = {
    username: "raj",
    age: 22,    

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    }
}

/*
user.welcomeMessage()
user.username = "sonu"
user.welcomeMessage()
console.log(user);
*/

//Note:- in node enviorment there no gobal object for context, but in case of browser it return "windows object"
// console.log(this);

// const bhai = function(){
//     let username = "Rajendra"
//     console.log(this.username); //in function we can not get current context using "this" key word
// }

const bhai = () => {
    let username = "raj"
    //but when we use only "this" key we get empty object
    console.log(this.username);

}
//bhai()

//explicite return arrow function
const addTwo = (num1,num2) => {return num1 + num2}

//implicite return arrow function
const multiTWo = (num1, num2) => (num1 * num2) 

console.log(addTwo(3,7));
console.log(multiTWo(3,7));