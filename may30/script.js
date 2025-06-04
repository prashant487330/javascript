function display()
{
let firstName=prompt("Enter your name");
return firstName;

}
let result = display();
console.log(result);



const person ={
    name : "harry",
    age :23,
};

const person2 ={
    name : "brad",
    age :45,
};

function display1(user){
    console.log("my name is "+user.name+" and  my age is "+user.age+" years old");
}
display1(person);
display1(person2);

// sum of two number
function sum(a,b){
    console.log("sum = "+(a+b));
}
 sum(5,6);

//  which number is greater

function greater(a,b){
    if(a>b){
        console.log(a);
    }
    else{
        console.log(b);
    }
}

greater(4,5);


// even or odd

function evenOrOdd(a,b){
    if(a%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

evenOrOdd(40,55);


// square of a number

function square(a){
    console.log(a*a);
}
square(5);


// celcius to farenheit

function celciustofarenheit(x){
        return (x*9)/5+32;

}
let ans5 =celciustofarenheit(10);
console.log(ans5);

// function expression

// let name = function(x){
//     // code to be executed
// };


// Arrow function

// let name = ()=>{
//     // code to be executed
// };


// sum of two number

let sum1 = (x,y)=>{
    return x+y;
};
let ans1=sum1(10,20);
console.log("sum = "+ans1);


//  which number is greater




let greater1 = (a,b)=>{
    if(a>b){
        console.log(a);
    }
    else{
        console.log(b);
    }
};

greater1(5,6);