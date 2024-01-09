const name = ("Rajendra")
const strName = new String("Rajendra-RC-7007")
console.log(name);
console.log(strName);

console.log(strName[4]);

console.log(strName.toUpperCase());

console.log(strName.charAt(3));
console.log(strName.indexOf('d'));

const newStr = strName.slice(2,4)
console.log(newStr); //can use negative value

const anotherStr = "    jjefpi  "
console.log(anotherStr.trim());

console.log(strName.split('-')); // to covert string into array 