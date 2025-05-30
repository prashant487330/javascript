// challenge Question
const library=[{
    title:"history",
    author:"richard",
    status:{
        own:true,
        reading:false,
        read:false,
    },
},
{
    title:"polity",
    author:"xyz",
    status:{
        own:true,
        reading:false,
        read:false,
    },
},
{
    title:"geography",
    author:"william",
    status:{
        own:true,
        reading:false,
        read:false,
    },
},
];

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const {title:history}=library[0];

const jsonobject=JSON.stringify(library);
console.log(jsonobject);

// Funstions-function is a way to group code together,you can run it anytime anywhere.
// function declaration
function display(){
    console.log("hello Prashant");
}

// invoking or calling a function
display();

// function add(x,y)
// {
//     console.log(x+y);
// }
// add(10,20);
// add(12,32);

// function subtract(x,y){
//     return x-y;
// }
// let result=substract(100,20);
// console.log(result);

function multiply(x,y)
{
    console.log(x*y);
}
multiply(10,10);

function division(x,y){
    return x/y;
}
let result=division(10,2);
console.log(result);

// function cube(x){
//     return x*x*x;
// }
// const result2=cube(10);
// alert(result2);

function show(name){
    return prashant;
}
const result3=show(prashant);
alert(result3);