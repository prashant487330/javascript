
let Fetchdata=async()=>{
      let url='http://localhost:3000/drappointment'
      let res=await fetch(url,{method:"GET"})
      let data=await res.json()
      console.log(data);



let show=document.querySelector("#showdata")

data.map((e)=>{
    show.innerHTML+=`
    <tr>
        <td>${e.name}</td>
        <td>${e.aadhar}</td>  
        <td>${e.checkin}</td>
        <td>${e.checkout}</td>
        <td>${e.city}</td>
        <td>${e.person}</td>
        <td>${e.total}</td>
        <td onclick="del('${e.id}')">Delete</td>
    </tr>
        `
})

}

    
let del=(id)=>{
let url=`http://localhost:3000/drappointment/${id}`
fetch(url,{method:"DELETE"})
}

let Ins=()=>{
    let name=document.querySelector("#name").value
    let aadhar=document.querySelector("#aadhar").value
    let checkin=document.querySelector("#checkin").value
    let checkout=document.querySelector("#checkout").value
    let city=document.querySelector("#city").value
    let person=document.querySelector("#person").value

    let url='http://localhost:3000/drappointment'

    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            Name:name,
            Aadhar:aadhar,
            Checkin:checkin,
            Checkout:checkout,
            City:city,
            Person:person,
            price:500
        })
    })
    location.href="crud.html"
    return false
}









 