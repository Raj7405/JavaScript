// for i of arr1
//here i is not index value it is value itself
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// // Maps
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
const map1 = new Map([
    [1,"raj"],
    [2,"sonu"],
    [3,"raju"],
])
//console.log(map1);
for( const [key,value] of map1){
    console.log(key, ':-',value);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

//here we distructuring our map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//herte object are not iteratable... for that we use "For In loop"

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
