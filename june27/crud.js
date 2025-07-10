let Fetchdata=async()=>{
      try{
      let url='http://localhost:3000/drappointment'
      let res=await fetch(url,{method:"GET"})
      let data=await res.json()
      Datashow(data)}
      catch(err){
        console.log(err)
      }
}
let search=async()=>{
    let searchinp=document.querySelector("#search").value.toLowerCase()
    let url='http://localhost:3000/drappointment'
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    let FilterData=data.filter((e)=>{
        return e.Name.toLowerCase().includes(searchinp) || e.Aadhar.toString().includes(searchinp)
    })
    Datashow(FilterData)
}    

let Datashow=(data)=>{
let show=document.querySelector("#showdata")
show.innerHTML=""

data.map((e)=>{
    show.innerHTML+=`
    <tr>
        <td>${e.Name}</td>
        <td>${e.Aadhar}</td>  
        <td>${e.Checkin}</td>
        <td>${e.Checkout}</td>
        <td>${e.City}</td>
        <td>${e.Person}</td>
        <td>${e.Person*500}</td>
        <td onclick="del('${e.id}')">Delete</td>
        <td onclick="formopen('${e.id}')">update</td>
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

    fetch (url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            Name:name,
            Aadhar:aadhar,
            Checkin:checkin,
            Checkout:checkout,
            City:city,
            Person:person,
            Price:500
        })
    })
    location.href="crud.html"
    return false
}

let formopen=async(id)=>{
    let url=`http://localhost:3000/drappointment/${id}`
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()

    let Formdata=`
    Enter Name: <input type="text" id="upname" value="${data.Name}">
        <br><br>
        Enter Aadhar: <input type="text" id="upaadhar" value="${data.Aadhar}">
        <br><br>
        Checkin: <input type="date" id="upcheckin" value="${data.Checkin}">
        <br><br>
        Checkout: <input type="date" id="upcheckout" value="${data.Checkout}">
        <br><br>
        <select id="upcity">
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Delhi">Delhi</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Pakistan">Pakistan</option>
        </select>
        <br><br>
        Enter Person: <input type="text" id="upperson" value="${data.person}">
        <br><br>
        <input type="submit" value="Update Now" onclick="return updateData('${data.id}')">
        `
        document.querySelector("#formShow").innerHTML=Formdata
}

let updateData=(id)=>{
    let name=document.querySelector("#upname").value
    let aadhar=document.querySelector("#upaadhar").value
    let checkin=document.querySelector("#upcheckin").value
    let checkout=document.querySelector("#upcheckout").value
    let city=document.querySelector("#upcity").value
    let person=document.querySelector("#upperson").value

    let url=`http://localhost:3000/drappointment/${id}`
    fetch(url,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            Name:name,
            Aadhar:aadhar,
            Checkin:checkin,
            Checkout:checkout,
            City:city,
            Person:person,
            Price:500
        })
    })
location.href="crud.html"
return false
}