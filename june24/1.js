let sett=()=>{

    localStorage.setItem("Age",21)
    localStorage.setItem("Name","Prashant")
    location.reload()
    // location.href="index.html"
}

let show=document.querySelector("#showname")
show.innerHTML=localStorage.getItem("Name")

let rem=()=>{
    localStorage.removeItem("Name")
    location.reload()
}