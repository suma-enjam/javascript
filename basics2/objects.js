//-------------------objects-----------------

//if it is set with constructor it is singleton
//if declared as a literal then it is not singleton

//singleton

//--------------object literals-------

const mysym=Symbol("key1")


const jsuser={
    "full name":"suma enjam",
    name:"suma",
    [mysym]:"mysym1",
    age:20,
    location:"khammam"
}
//this is objext ie the curly braces
//this objects have key value pairs
// console.log(jsuser.name)//suma
// console.log(jsuser["name"])//suma

//the above is two types of ways to declare the elements 
//you cant use full name with dot

// console.log(jsuser["full name"])

// console.log(jsuser[mysym])

// console.log(typeof jsuser[mysym])//string not used as string//if declared as mysym

// //to use as a symbol you need to use []
// console.log(typeof jsuser[mysym])//symbol

// jsuser.name="navani"
// Object.freeze(jsuser)//after this u cant alterate the jsuser but it wont give error though u alter it
// jsuser.name="latha"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello world");
}

console.log(jsuser.greeting)//[Function (anonymous)]
console.log(jsuser.greeting())//hello world undefined

jsuser.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting2());
