let counter=0;
let cout=document.querySelector("#counter")
let inc=()=>{
    let yes=document.querySelector("#add")
    counter++;
    cout.innerHTML=counter
}

let dec=()=>{
    let no=document.querySelector("#sub")
    counter--;
    cout.innerHTML=counter
}
let res=()=>{
    let neu=document.querySelector("#zero")
    counter=0;
    cout.innerHTML=counter
}