const User = {
    _email: "raju@google.md",
    _password: "SOnu",
    
    get email(){
        return this._email.toUpperCase()
    },
    
    set email(value){
        this._email = value;
    }
    
}

console.log(User.email);