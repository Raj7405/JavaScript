//Named IIFE

(function bolo(name){
    console.log(`ha bol bhai! ${name} !!`)
})("rajendra");

//NOTE:- Need to terminate IIFE if u wanr to use multiple IIFEs


((place) => {
    console.log(`chal na bhai vudar ${place} me jara!!`)
})("garden")