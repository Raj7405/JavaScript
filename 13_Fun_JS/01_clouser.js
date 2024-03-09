function makefun(){
    const name = "Raju bhai";
    function printMe(){
        console.log(`${name} ke aage, koi bol sakata hai kya......! ${name}iiiiiii....!`)
    }
    return printMe;  //returning only refrence of printMe()
}

const fun = makefun(); //assigning refrence of printe(), which we provide entire Lexical Scope to fun
fun()