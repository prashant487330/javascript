

let digital=()=>{
    setInterval(()=>{
        let Time=new Date()
        let hours=Time.getHours()
        let minutes=Time.getMinutes()
        let second=Time.getSeconds()

        let show=document.querySelector("#show")
        show.innerHTML=`${hours} : ${minutes} : ${second}`
    },1000)
}