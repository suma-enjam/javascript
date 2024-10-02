//-------------DATE-----------------

//jan 1 1970 satrted from

let date=new Date();
console.log(date)//2024-10-02T13:16:28.839Z
console.log(date.toString())//Wed Oct 02 2024 13:17:26 GMT+0000
console.log(date.toDateString())//Wed Oct 02 2024
console.log(date.toLocaleDateString())//10/2/2024
console.log(typeof date)//object

let mydate=new Date(2023,0,6)//month satrts with 0
console.log(mydate.toDateString())//Fri Jan 06 2023

let mydate1=new Date(2023,0,6,5,3)
console.log(mydate1.toLocaleString())

let mydate2=new Date("2023-08-12")
console.log(mydate2.toLocaleString())//8/12/2023 12:00:00AM


let mytimestamp=Date.now()
console.log(mytimestamp)//gives number of mislliseconds from the 1 jan 1972

console.log(mydate.getTime());

console.log(Math.round(Date.now()/1000))//converting into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//newDate.toLocaleString('default',{wekday:"long"})
console.log(newDate.toLocaleString('default',{wekday:"long"}))





