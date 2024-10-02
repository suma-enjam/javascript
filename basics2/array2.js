const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel_heros.push(dc);

//console.log(marvel_heros)//["thor","ironman","spiderman",["superman","flash","batman"]]
//console.log(marvel_heros[3][2])//batman

// const newheros = marvel_heros.concat(dc)//when u concat u will have output in new arr not the the array u concated to
// console.log(marvel_heros)//gives only marvel heros 
// console.log(newheros)

// const allheros=[...marvel_heros,...dc]//... is a spread operator it makes whole array into individual elements
// console.log(allheros)

// const a=[123,[67,8,8],[89,9,0,[7,6,5]]];
// console.log(a.flat(Infinity));[123,67,8,8,89,9,0,7,6,5]


let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))//[100,200,300]

