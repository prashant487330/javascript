// object literal
const person={
    name:"john",
    age:23,
    iseligible: true,
    address:{
        city:"bhopal",
        state:"MP",
    },
    hobby:["dance","singing"],
};

// get the value
console.log(person.name);
console.log(person["age"]);
console.log(person.iseligible);
console.log(person["iseligible"]);
console.log(person.address.city);
console.log(person.hobby[1]);

// update values
person.iseligible=false;
person.name="harry potter";
console.log(person);

// constructor
const student=new Object();
student.id=1;
student.name="john";

console.log(student);

// arry of objects
const movies=[
    {title:"kgf",release: 2025},
    {title:"stranger things",release: 2020},
    {title:"harry potter",release:2010},
];
console.log(movies[1].release);
console.log(movies[2].title);

// spread operator(...)
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3={...obj1,...obj2};
console.log(obj3);

// destructuring
const todo={
    id:1,
    title:"something",
    user:"john",
};

// let a=todo.id
// let b=todo.title
// const {id,title,user}=todo;
// console.log(title);

const {id:i,title:t,user:u}=todo;
console.log(t);


const user={
    id:1,
    name:"rahul",
    age:23,
    city:"Bhopal",
};

// convert object to json string
const jsonUser=JSON.stringify(user);
console.log(user);
console.log(jsonUser);

// convert join string to object
const backtoobject=JSON.parse(jsonUser);
console.log(backtoobject);