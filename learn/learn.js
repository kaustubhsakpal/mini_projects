//destructure

let span=document.querySelector("span");
let h1=document.querySelector("h1");
let date= new Date();
let hours=date.getSeconds();
setInterval(()=>{
  console.log(hours)
h1.textContent=hours
},1000)
