const numbers = [10,20,30,40];
// using new constructor
const arr = new Array();
arr[0]="apple";
arr[1]=100;
arr[2]="cherry";
console.log(arr);

// from method of array
const arr1 = Array.from("1234");
console.log(arr1);

// Method
const numbers1= [10,20,30,40];

// add elements from end of an array
numbers1.push(60);

// removes an elements from end of an array
numbers1.pop();

// removes an elements from start of an array
numbers1.shift();

// add an elements to the start of an array
numbers1.unshift(10);

// reverse
numbers1.reverse();

// returns the length of an array

let x;
x=numbers1.length;

// checks if element is included or not
x=numbers1.includes(40);

// index of
x=numbers1.indexOf(30);

// convert array to string
x=numbers.toString();
x=numbers1.join();

// split converts a string to an array
// x=x.split(",");

// slice- takes the starting index and the ending index
x=numbers1.slice(0,3);
x=numbers1.slice(1);

// splice- works like slice except it takes the starting index and the number of elements to
// remove also it mutates the original array
x=numbers1.splice(0,2);

// splice to add elements
x=numbers1.splice(0,1,100,200,300,400);

// chaining array methods

console.log(numbers1);
x=numbers1.slice(1,4).reverse().toString().charAt(0);

console.log(x);



const fruits = ["apple","cherry","kiwi"];
const veggies = ["lemon","cucumber","cauliflower"];

const mixed = fruits.concat(veggies);

// spread operator(...)--copies a part of an array or complete
// array to another array
const newArray = [...fruits, ...veggies];
console.log(mixed);
console.log(newArray);

// Destructuring - putting the elements of an array into variable
const array=[1,2,3,4,5,6,7,8];
// let a = array[0]
// let b = array[1]

const [a,b,c,d, ...y]=array;
console.log(a);
console.log(b);
console.log(y);