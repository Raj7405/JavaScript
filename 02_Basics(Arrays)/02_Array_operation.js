const marvel_heros = ['spiderman','ironman','thor']
const dc_heros = ['superman','batman','flash']
const ind_heros = ['shekatiman','nagraj','doga']
// marvel_heros.push(dc_heros)
// console.log(newArr);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//we can use spread operator to concatinate multiple array at same time 
const all_heros = [...marvel_heros,...dc_heros,...ind_heros];
console.log(all_heros);

//to make 1d array from multidimention or nested array we .flat()
const nested_arr = [1,2,3,4,[5,6,7],8,[9,[10,11,12,13],14]]
const new_1D_arr = nested_arr.flat(1) //infinity can be arugument 
console.log(new_1D_arr);

//to check wheter given datra is array
console.log(Array.isArray("Rajendra"));
console.log(Array.from("Rajendra")); //to convert any element into array

//to create array from set of elements
let A = 2001
let B = 2002
let C = 2003
let D = 2004
let E = 2005

const combo_Arr = Array.of(A,B,C,D,E)
console.log(combo_Arr);