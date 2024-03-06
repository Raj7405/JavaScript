class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
}
// The "super()" method in Java is specifically used to invoke constructors of the parent class.
class Teacher extends User {
    constructor(username, email, subject){
        super(username);  //do same work as call() function, child to parent behind the scene
        this.email = email;
        this.subject = subject;
    }

     techInfo(){
        console.log(`${this.username}'s teaching subject is ${this.subject}`);
     }
}

const teacher_1 = new Teacher("rajendra", "raj@edu.com", "Physics");
teacher_1.techInfo()
teacher_1.logMe()

console.log(teacher_1 instanceof Teacher);
console.log(teacher_1 instanceof User)