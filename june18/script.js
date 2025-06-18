
let Time=new Date()
let days=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]

console.log(days[Time.getDay()])

let month=["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(month[Time.getMonth()])


// setinterval
let hello=()=>{
    let count=0
    let inter=setInterval(()=>{
    console.log(count)
    count++
    },1000)
}

let hii=()=>{
    clearInterval(inter)
}