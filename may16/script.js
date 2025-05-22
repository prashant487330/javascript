var age = 34;
var name = "john";
var something = true;

console.log(age);

// naming
// should be meaningfull
// it should not start with number or special character
// firstname - lowercase
// Firstname - pascalcase
// firstName - camelcase

// var /let /const

// only declaration -let,var

const a = 10;
console.log(a);

// reinatialize -let,var
let b = 100;
b = 200;
console.log(b);

// redeclare -var
var firstName = "john";
var firstName = "harry";
console.log(firstName);

// datatypes-
var output = 23.67;
output = "hello";
output = true;
output = null;
output = 1756998877n;
// A BigInt is created by appending n to the end of an integer or by calling the BigInt() function
output = Symbol("id");

console.log(output, typeof output);