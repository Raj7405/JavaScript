const users = {
    userName: 'raj',
    loginCount: 8,
    isLoggedIn: true,

    greeting: function(){
        console.log(`welcome ${this.userName}`);
    }
}

console.log(users.greeting());

// class User {
//     constructor(userName, loginCount, isLoggedIn) {
//         this.userName = userName;
//         this.loginCount = loginCount;
//         this.isLoggedIn = isLoggedIn;

//         return this;
//     }
// }
      
function User(userName, loginCount, isLoggedIn) {
        this.userName = userName;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        return this;
    }

//constructor function
const userOne = new User('RAJ', 10, true);
const userTwo = new User('SONU', 2, false);
console.log(userTwo.constructor);
console.log(userTwo instanceof User)