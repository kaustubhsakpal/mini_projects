//destructure

// let span=document.querySelector("span");
// let h1=document.querySelector("h1");
// let date= new Date();
// let hours=date.getSeconds();
// setInterval(()=>{
//   console.log(hours)
// h1.textContent=hours
// },1000)


let prompt = require('prompt-sync')();
let day = Number(prompt("Enter your name: "));
  
switch(day){
  case 1:
    {console.log("monday");break;}
  case 2:
    {console.log("tuesday");break;}
  case 3:
   { console.log("firday");break;}
  case 4:
   { console.log("saturday");break;}
  case 5:
   { console.log("sunday");break;}
}