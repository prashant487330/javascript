// map
let num=[2,4,7,5,9,1]
let newarr=num.map((e)=>{
    return e*2
})
console.log(newarr);

let con=num.map((e)=>{
    return e/2
})
console.log(con)

// filter
let arr=[2,6,4,9,8,7]
let newfilter=arr.filter((e)=>{
    return e>4
})
console.log(newfilter);

let filter2=arr.filter((e)=>{
    return e>5
})
console.log(filter2);

// forEach
num.forEach((e)=>{
    console.log(e*3);
})