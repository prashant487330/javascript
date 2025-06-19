
let Time=new Date()
let days=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]

console.log(days[Time.getDay()])

let month=["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(month[Time.getMonth()])


// setinterval

let inter
let hello=()=>{
    let count=0
    inter=setInterval(()=>{
    // console.log(count)
    let show=document.querySelector("#data")
    show.innerHTML=count
    count++
    },1000)
}

let hii=()=>{
    clearInterval(inter)
}

