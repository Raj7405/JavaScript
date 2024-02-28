//Frist Promise
const promiseOne = new Promise(function(resole,reject){
    setTimeout(()=>{
        console.log("1: first promise created");
        resole()
    }, 1000)
})

promiseOne.then(function(){
    console.log("->One is consumed!")
})


//Second Promise
new Promise((resole, reject) => {
    setTimeout(()=>{
        console.log("2: promise two is created ")
        resole();
    },2000)
}).then(() => {

    console.log("->Two is consumed!!")
})

//Third Promise
const promiseThree = new Promise((resole,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            console.log("3: promise Three is created ")
            resole({userName: 'Raj', age: 21});
        }
        else{
            console.log("ERROR: Something Went Wrong!")
        }
    }, 3000)
})

promiseThree.then((obj)=>{
    console.log(obj);
    console.log("-> Three Consumed!");
}).catch((error)=>{
    console.log(error);
})

//Fourth Promise
const promiseFour = new Promise((resole,reject)=>{
    setTimeout(function() {
        let error = false;
        if(!error){
            console.log("4: promise four is created ")
            resole({userName: 'Raj', age: 21});
        }
        else{
            console.log("ERROR: Something Went Wrong!")
        }
    },4000)
})
promiseFour.then((obj) =>{
    return obj
}).then((user) => {
    console.log(user.userName)
    console.log("-> four consumed!")
}).catch((error)=>{
    console.log(error);
})
