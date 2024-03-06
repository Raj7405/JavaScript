class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encrptPassword(){
        return `${this.password * Math.floor(Math.random() * 10 + 1)}`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const student = new User("raj", "raj@g.com", 123)
console.log(student.encrptPassword());
console.log(student.changeUsername())