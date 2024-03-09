class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
        // return `This shit is not accesseble to you!`;
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `descript your self ${this._password * Math.floor(Math.random() *420)}`
    }

    set password(value){
        this._password = value;
    }
}

const userOne = new User("raj@ca.u", "123");

console.log(userOne.email)
console.log(userOne.password)