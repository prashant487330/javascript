let d=new Date();

// new Date(year,month,day,hours,min,sec,millisec);
// in js jan is 0 dec is 11

d=new Date(2020,14,22,12,24,45,300);
d=new Date(2020,5,23,13,43,44);
d=new Date(2025,5,23,23,43);
d=new Date(2025,5,23,13);
d=new Date(2025,5,23);
d=new Date(2025,5);
// single value is treated as milisec
// js adds the milisec s to jan 1 1970 5:30 date
d=new Date(4025);

d=new Date("07-10-2022");
d=new Date("2022-9-8");
d=new Date("2-8-2020 12:30:34");

d=new Date(42733746373882);
d=Date.now();
console.log(d);

let mydate=new Date();

let x;

x=mydate.getFullYear();
x=mydate.getMonth();
// sunday 0
x=mydate.getDay();
x=mydate.getHours();
x=mydate.getMinutes();
x=mydate.getSeconds();
x=mydate.getMilliseconds();
console.log(x);


// task
// let y = mydate.getFullYear();
// let birthyear = prompt("enter birthyear");
// let age = y - birthyear;
// console.log(age);

// Array - array literal
const numbers = [1,2,3,4,5,6,7];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

// update the values
numbers[0] = 100;
console.log(numbers);

const names = ["Vineet","Aman","Nikhil","Ashish"];
console.log(names);
console.log(names[0]);

const mixed=[
    "john",
    34,
    true,
    null,
    undefined,
    {name:"harry",age:23},
    [100,200],
];
console.log(mixed);
console.log(mixed[5].name);
console.log(mixed[5].age);
console.log(mixed[6][1]);
