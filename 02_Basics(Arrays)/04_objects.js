//Singlrton Object

// const myObj = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rock"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Raj@jjsk.ani",
    fullname: {
        username: "gojo",
        realnameL: {
            firstname: "Raj",
            lastname: "Chaudhari"
        }
    }
}

//console.log(regularUser.fullname.realnameL);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1,obj2}
// Way-1
/*
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);
*/

//way-2 and best way
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

//multiple objects in array from database
const users = [
    {
        id: 1,
        email: "000h@gmail.com"
    },
    {
        id: 1,
        email: "111h@gmail.com"
    },
    {
        id: 1,
        email: "222h@gmail.com"
    },
]

console.log(users[2].email);

// to extract key,values or entries sepratly from multiple objects

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

//to check wether object contain particular element in it!!
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
