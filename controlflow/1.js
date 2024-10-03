//----------------CONTROL FLOW---------------


//var has gobal scope
//if,else

//comparision operators
//<,>,<=,>=,==,!=,===,!==



//implicit scope
// const balance = 1000
// if(balance>400) console.log("test"),console.log("test1")//not recommed 

// if(balance<500){
//     console.log("less than")
// }
// else if(balance<750){
//     console.log("byr")
// }
// else{
//     console.log("hi")
// }

// && ,|| ==> logical operator

//switch

// const month=3

// switch(month){
//     case 1:
//         console.log("january")
//         break
//     case 2:
//         console.log("feb")
//         break
//     case 3:
//         console.log("mar")
//         break
//     default:
//         console.log("not in the range")
//         break
// }

//why do we use break 
//if break is not used then all the code except default is excuted

//flasy value
//false,0,-0,BigInt 0n,"",NaN,null,undefined=>these all are false values

//truthy values
//"0",'false'," "(any thing with in a string is true),[],{},function(){}

// const emptyObj={}
// if(Object.keys(emotyObj).length===0){
//     console.log("object is empty")
// }

// false==0//true
// ""==0//true
// ""==false//true

//nullish coalescing operator (??) : null undefined

// let val1;
// //val1=5??10 //5
// //val1=null ?? 10 //10
// //val1=undefined ?? 15 //15

// val1=null??10??20 //10 //gives the first value
// console.log(val1) 

//terniary operator

//condition?true : false

// const icetea=100

// icetea>=100 ? console.log("greater than 100") : console.log("less than hundered")


