//for

// for(let i=0;i<10;i++){
//     console.log(i)
// }

// for(let i=0;i<=10;i++){
//     for(let j=0;j<=10;j++){
//         console.log(i + "*" + j + "=" + i*j)
//     }
// }
//js dont have out of bound u get undefined

//break and continue

//while


// let i=0
// while(i<=10){
//     console.log(i)
//     i++
// }

//do-while

// let score=11
// do{
//     console.log(score)
//     score++
// }while(score<10)

// for of loop

// const arr=[1,2,3,4,5,6,7]
// for(const val of arr){
//     console.log(val)
// }

// const term="suma enjam";
// for(const it of term){
//     console.log(it);
// }

//Maps

const m=new Map()
m.set("1","suma")
m.set("2","navani")
m.set("3","sri")
m.set("4","prasad")

// console.log(m)//Map(4) {
// //     '1' => 'suma',
// //     '2' => 'navani',
// //     '3' => 'sri',
// //     '4' => 'prasad'
// //   }

// for(const key of m){
//     console.log(key);
// }
// // [ '1', 'suma' ]
// // [ '2', 'navani' ]
// // [ '3', 'sri' ]
// // [ '4', 'prasad' ]

// for(const [key,val] of m){//array is being destructured
//     console.log(`${key} : ${val}`)
// }

const myobj={
    g1:"football",
    g2:"cricket"
}

// for(const it of myobj){//not iteratable
//     console.log(it)
// }


// FOR IN LOOP

// for(const it in myobj){
//     console.log(it)
// }//g1 g2 ie u get the key


// for(const it in myobj){
//     console.log(myobj[it])
// }//football cricket

// const arr=[1,2,3,4,5,6,7]

// for(const it in arr){//0,1,2,3,4,5,6 ie you get the keys
//     console.log(it)
//     console.log(arr[it])
// }


//map is not iteratable

//------------FOR EACH-------------
// const lang=["js","c","cpp","java","python"]

// lang.forEach( function (item) {//fun dont have name and the ele are given as argumnets
//     console.log(item)
// } )

// lang.forEach((item)=>{
//     console.log(item)
// })

// function printme(it){
//     console.log(it)
// }

// lang.forEach(printme)

// lang.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// const code = [{
//     lang:"js",
//     file:"1"
// },
// {
//     lang:"cpp",
//     file:"2"
// }
// ]

// code.forEach((item)=>{
//     console.log(item.lang)
//     console.log(item.file)
// })


const coding=[1,2,3,4,5,6,7]

// const val=coding.forEach((it)=>{
//     return it
// })

// console.log(val)//undefined 

// //because forEach doesnt return anyvalue

// const num=coding.filter((num)=>num>4)//(retrun all the nums that satisfy the condition)
// console.log(num)//[5,6,7]

// const num=coding.filter((num)=>{num>4})
// console.log(num)//[]


// const num=coding.filter((num)=>{return num>4})//you have write return when you put {}
// console.log(num)//[5,6,7]


// const x=[]
// coding.forEach((num)=>{
//     if(num>4){
//         x.push(num)
//     }
// })
// console.log(x)

//forEach filter map are all callback functions

//-----------map---------

// const nums=[1,2,3,4,5,6,7]
// const nums2=nums.map((n)=>n+10)


//------------chaining-----------

// const nums2=nums.map((num)=>num*10)
//                 .map((num)=>num+1)//the num here is the ele in the above result
//                 .filter((num)=>num>30)
// console.log(nums2)


//--------------REDUCE-----------
// const nums=[1,2,3,4,5]

// const mytol=nums.reduce(function (acc,curval){
//     console.log(`acc : ${acc} curval : ${curval}`)
//     return acc+curval
// },0)//this is the initial val of acc

//in the above the curval is the the val in which the arr is 

// const mytol=nums.reduce((acc,curr)=>acc+curr,0)

// console.log(mytol)

// const shoppingCart=[
//     {
//         name:"suma",
//         age:20
//     },
//     {
//         name:"chinnu",
//         age:24
//     }
// ]

// const x=shoppingCart.reduce((acc,item)=>acc+item.age,100)
// console.log(x)

