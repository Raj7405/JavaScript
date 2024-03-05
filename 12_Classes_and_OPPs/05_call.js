function setUserName(userName){
    //all complex calculation
    this.userName = userName;
}

function createUser(userName, email, password){
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const chai = new createUser("Raj", "raj@google.com", "123")

console.log(chai);