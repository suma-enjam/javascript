// function myname(){
//     console.log("S")
//     console.log("U")
//     console.log("M")
//     console.log("A")
// }

// myname//just reference
// myname()//calling

// function add(n1,n2){//n1 n2 are parameters not aruguments
//     console.log(n1+n2);
// }

// add(2,3)//5
// add("suma","kk")//sumakk
// add(3,"a")//3a//the things we send while calling function are called arguments
// add(2,null)//2

// const s=add(3,4)
// console.log(s)//undefined cause we didnt set the return value 

// function add(n1,n2){
//     // let result=n1+n2;
//     // return result;

//     return n1+n2
// }

// function name1(st){//to give default value (st="suma") this put the default val of st as suma
//     if(st===undefined){//(!st)
//         console.log("please enter a valid name")
//         return
//     }

//     return `${st} is the name`
// }

// console.log(name1("suma"))//suma is the name
// console.log(name1())//undefined

// function cpp(num1){
//     return num1
// }
// console.log(cpp(2))//2
// console.log(cpp(200,300,400))//200//ie takes teh first val

// function cpp(...num1){//rest operator
//     return num1
// }
// console.log(cpp(2))//[2]
// console.log(cpp(200,300,400))//[200,300,400]


function handleobj(anyobj){
    console.log(`${anyobj.name} if of age ${anyobj.age}`)
}
let user={name:"suma",age:40}
handleobj(user)//suma if of age 40
handleobj({name:"suma",age:40})//suma if of age 40