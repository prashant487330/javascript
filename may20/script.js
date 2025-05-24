// string
var str = "Javascript is the great language Javascript";
var str1 = "react";

// concatenation
var newString = str +" "+ str1;
console.log(newString);

// template literal or template string or backticks
newString = `${str} and ${str1}`;
newString = 
console.log(newString);


// string methods
let x;
// returns the number of characters in a string
x = str.length;

// charAt- returns the character at index
x = str.charAt(5);

// indexof- returns the index number of first occurence of character
x = str.indexOf("t");

// toUpperCase - changes to capital letter
x = str.toUpperCase();

// replace- replaces the text
x = str.replace("Javascript","Typescript")
x = str.replaceAll("Javascript","Typescript")

// checks if the text  is present in the string
x = str.includes("is");

// trim- removes the whitespace from the starting and ending
x = str.trim();

// slice- starting index and endiing index(not included)
x = str.slice(0,15);
x = str.slice(-10,-1);

// subString
x = str.substring(5,35);
console.log(x);

// task 
var string = "developer";
x = string.charAt(0).toUpperCase() + string.slice(1);
console.log(x);