fetch('https://api.github.com/users/Raj7405')
.then((Response)=>  Response.json())
.then((data)=> console.log(data))
.catch(() => console.log("ERROR: Something went Wrong!!"))

async function GitProfile(){
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = await response.json();
        console.log(data);
    }
    catch{
        console.log("E:somethink went wrong!!")
    }
}

GitProfile()