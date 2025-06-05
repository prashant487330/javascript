// iife (immediately invoked function expression)
(function(){
    let x="hello";
} 
)();

// loops
// for loop
// while loop
// do while loop


//in javascript we study
// for in
// for of
// foreach

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i=1;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

let i=0;
while(i<10){
    console.log(i);
    i++;
}

let x=11;
do{
    console.log(x);
    x++;
}
while(x < 10);

// for in loop-used to through the properties of an object
// for(key in objectname){
// code to be executed}
const person={
    name:"john",
    age:44,
    city:"bhopal",
    state:"MP",
    country:"India",
};

for(let x in person){
    console.log(person[x]);
}

// array
//const numbers=[10,20,30,40,50];
//for(let x in numbers){
//    console.log(numbers[x]);
// }

 const fruits=["apple","banana","grapes","kiwi"];
// for(let x in fruits){
//     console.log(fruits[x]);
// }

for(let x;x<fruits.length;i++){
    console.log(x);
}

let value="Sundayyyyyyy!!YAYYYY"
for(let i in value){
    console.log(i);
}