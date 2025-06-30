
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

Fetchdata() 









 