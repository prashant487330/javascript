// object literal
const person = {
    name: "john",
    age: 23,
    city: "london",
};

console.log(person, typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

// array
const numbers = [1,2,3,4,5,6];
console.log(numbers, typeof numbers);

console.log(numbers[0]);
console.log(numbers[5]);

// function

function greet(){
    // code
    console.log("greeting from me");
}

greet();
console.log(greet,typeof greet);


// operators
let x = 10;
let y = 20;

/*let z = x + y;
z=x-y;
z=x*y;
z=x%y;
z=x/y;

x+=y
x=x+y; */

// equality operator-
// it compares the value along with the data type

if(x===y){
    console.log("equal");
}else{
    console.log("not equal");
}


// type conversion
let num = "100";
num = true;
num = Number(num);
console.log(num, typeof num);

let num1 = 300;
num1 = num1.toString();
console.log(num1, typeof num1);

// user input
// let firstName = prompt("enter your name");
// console.log(firstName);

// // age,city,course

// let age = prompt("enter your age");
// console.log(age);

// let city = prompt("enetr your city");
// console.log(city);

// let course = prompt("enter your course");
// console.log(course);

// // parseInt and parseFloat
// let num2 = parseFloat(prompt("enter number"));
// console.log(num2);

// arithametic operations-

let numb1 = parseInt(prompt("enter numb1"));
let numb2 = parseInt(prompt("enter numb2"));
console.log("addition is:");
console.log(numb1+numb2);
console.log("subtraction is:");
console.log(numb1-numb2);
console.log("multiplication is:");
console.log(numb1*numb2);
console.log("division is:");
console.log(numb1/numb2);
console.log(numb1%numb2);
