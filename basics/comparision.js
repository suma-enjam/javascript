console.log("2" > 1)//true
console.log("02">1)//true

//typescript is type safe language

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

//in the above the comparision operator convert the null to number but the equality doesnt

console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined>=0)//false

//strict check ===
//it not only check the value it also check the datatype