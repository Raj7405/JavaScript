const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(6,7,8,9,10)

// console.log(myArr);
// console.log(myArr2);
// myArr2.push(6)
// console.log('B',myArr2);
// myArr.pop()
// console.log('A',myArr);

// myArr2.unshift(0);
// console.log('B',myArr2);
// myArr2.shift()
// console.log('B',myArr2);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(4));

//diffrence btw slice() splice()
console.log('A', myArr.slice(1, 4));//it perform slicing on copy of given array, not on orignal one
console.log('orignal A',myArr)
console.log('after A', myArr)


console.log('B', myArr2.splice(1, 4)); //it perform splicing on orignal array in memory
console.log('orignal B', myArr2);
console.log('after B', myArr2)