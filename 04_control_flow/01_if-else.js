const user = {
    userName: "Rajendra",
    userEmail: "r@google.ai"
}
const userLoggedIn = true
if(userLoggedIn){
    console.log(`hello mr.${user.userName}!!`);
}
else if(!userLoggedIn){
    console.log("user is not logged in");
}
else{
    console.log("user not found");
}

//short hand notation but not goog practice if more than one statement need to execute in scope
if(user.userEmail == "r@google.ai") console.log("valid Email") , console.log(`Mr.${user.userName}`)


const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//logical operators &&,||

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}