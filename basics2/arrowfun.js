// const user = {
//     username: "suma",
//     price: 99,

//     welcome: function(){
//         console.log(`${this.username} hello`)
//         console.log(this)
//     }
    
// }

// user.welcome()//suma hello
// user.username="chinnu"
// user.welcome()//chinnu hello
// //chinnu hello
// //{ username: 'chinnu', price: 99, welcome: [Function: welcome] }

// console.log(this)//{}
// // gobal obj in browser is window whose val is {}

// function chai(){
//     let name="suma"
//     console.log(name)//suma
//     console.log(this.name)//undefined
// }
// chai()

//ie only for obj "this" is working but not in funactions 

// const chai=function(){
//     let name="suma"
//     console.log(this.name)//undefined
//     console.log(name)///suma
//     console.log(this)
// }

// chai()

// const chai=() => {//this the arrow function
//     let name="suma"
//     console.log(this.name)//undefined
//     console.log(name)//suma
//     console.log(this)//{}
// }

// chai()

//-------------arraow function ----------------
//()=>{}  syntax

// const addtwo=(n1,n2) => {
//     return n1+n2
// }
// console.log(addtwo(2,4))

//implicit return 
// const addtwo=(n1,n2)  => n1+n2

// console.log(addtwo(2,4))//6

//immediately invoked function expressions(IIFE)

// function chai(){
//     console.log('DB CONNECTED');
// }

// chai()


//named iffie
(function chai(){
    console.log('DB CONNECTED');
})();//you have to keep ; to end it

//()()
//first () is for declaration 
//second () is for exection

// (()=>{
//     console.log("DB")
// })()
//unnamed iffie
((name)=>{
    console.log(`DBBB ${name}`)
})('suma')