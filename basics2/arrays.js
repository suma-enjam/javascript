//-----------------------ARRAY----------------------

const myArr=[1,2,3,4,5,6]

//size is not fixed
//can have values of diff types
//0 based indexing
//shallow copy(same reference)

const heroes= ['ram','suma','prsad']

const myarr=new Array(3,4,5,6,5)
console.log(myarr)//[3,4,5,6,5]
console.log(myarr[3])//6

myarr.push(8)
console.log(myarr)

myarr.pop()
console.log(myarr)

myarr.unshift(8)//adding at first
console.log(myarr)

myarr.shift()//removing what ever we have added
console.log(myarr)

console.log(myarr.includes(5))//true
console.log(myarr.indexOf(9))//-1
console.log(myarr.indexOf(5))//2

const newarrr=myarr.join()//converts into string
console.log(myarr)//[ 3, 4, 5, 6, 5 ]
console.log(newarrr)//3,4,5,6,5 // type --> string



//----------slice------------
let myarr1=[3,4,5,6,7,8]

console.log("1 : " + myarr1)//3,4,5,6,7,8

let ma1=myarr1.slice(1,3)
console.log("2 : "+myarr1)//3,4,5,6,7,8
console.log(ma1)//4,5

let ma2=myarr1.splice(1,3)
console.log("3 : "+myarr1)//3,7,8
console.log(ma2)//4,5,6



