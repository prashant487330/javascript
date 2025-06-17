
let employe=[{
    name:"Ashish",
    age:22,
    city:"Lahore"
},
{
    name:"Ram",
    age:19,
    city:"karanchi"
},
{
    name:"Shyam",
    age:21,
    city:"bhopal"
}
]
let show=document.querySelector("#data")
    employe.map((e)=>{
        show.innerHTML+=`
        <tr>
          <td>${e.name}</td>
          <td>${e.age}</td>
          <td>${e.city}</td>
        </tr>  `
    })