const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//here key is index number or key it self not value itself like "for of loop"
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

//Map is not itretable using "For In loop"
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key] in map) {
    console.log([key]);
}
