//Stringssss

console.log("hi "+'suma');//hi suma
//can either be in " " || ' '

let name="suma"
let c =50
console.log(name+c+"value");//suma50value


//String interpolation

console.log(`hello hi ${name}`);
console.log(name[0]);
const game=new String("football");//using constructor


console.log(game[0])
console.log(game.length)//8
console.log(game.toUpperCase())//FOOTBALL
console.log(game.charAt(5))//a
console.log(game.indexOf('o'))//1

let nn="suma-enjam"
console.log(nn.substring(3,5))//a-//5th wont be included//aant use -ve index

console.log(nn.slice(3,8));//a-enj
console.log(nn.slice(-8,8))

let h = "  suma  "
console.log(h);//[  suma  ]
console.log(h.trim())//[suma]

console.log(nn.replace('a','--'))//sum---enjam
console.log(nn.includes("jam"))//true

console.log(nn.split('-'))//['suma','enjam']

