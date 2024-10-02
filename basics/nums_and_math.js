//________________NUMBERS________________________

const score = 400
console.log(score)//400
const balance = new Number(100)
console.log(balance)//[Number:100]

console.log(typeof balance.toString())//string
console.log(balance.toString().length)//3
console.log(balance.toFixed(2))//100.00
console.log(balance.toFixed(1))//100.0

let x=45.7
console.log(x.toPrecision(2))//46
let y= 234.56789
console.log(y.toPrecision(6))//234.568 

const hundereds=10000000000000000000
console.log(hundereds.toLocaleString())//10,000,000,000,000,000,000
console.log(hundereds.toLocaleString('en-IN'))//10,00,00,00,00,00,00,000

//-------------------------MATH-----------------

console.log(Math)//object [Math] {}
console.log(Math.abs(-1))//1
console.log(Math.abs(1))//1

console.log(Math.round(8.976))//9

console.log(Math.ceil(4.54))//5
console.log(Math.floor(4.54))//4

console.log(Math.min(2,3,4,5,6,7,11,56))//2
console.log(Math.max(334,78,45))//334

console.log(Math.random())//always gives a value between 0 to 1
console.log((Math.random()*10) +1)//gives between 1 to 10

const min = 10
const max = 20
//(we want between 10 to 20)

console.log(Math.floor(Math.random() * (max-min)+1)+min)//always gives val between min and max







