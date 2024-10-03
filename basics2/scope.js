// let a=90//gobal scope
// if(true){
//     let a=10//blockscope
//     const b=20
//     var c=30
//     console.log("Inner : " + a)
// }

// console.log(a)//error not in scope
// //console.log(b)//error not in scope
// console.log(c)//30

//you can write a function inside a function

//---------------------INTRESTING----------------------
add(5)//works dont give any error

function add(num){
    return num+1
}

//add1(5)//doesnt work gives error

const add1 =  function(num){
    return num+2
}