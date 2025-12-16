// let select=document.querySelector("select");
// let h1= document.querySelector("h1");
// document.addEventListener("keydown",(dets)=>{
//     h1.textContent=`${dets.key}`
//     if(dets.key===" ") h1.textContent="space";
// })
// select.addEventListener("change",(dets)=>{
// h1.textContent=`${dets.target.value} selected`;
// h1.style.textTransform="capitalize";
// })

// let btn=document.querySelector(".btn");
// let input=document.querySelector("input");
// let p= document.querySelector("p");
// btn.addEventListener("click",()=>{
//     input.click();
// })
// input.addEventListener("change",(dets)=>{
//     if(dets.target.value!==""){
//         p.textContent=`${dets.target.value}`
//     }
// })

// let card=document.createElement("div")
// card.classList.add("card")
// let profile =document.createElement("div")
// profile.classList("profile")
// img.setAttribute("src","https://plus.unsplash.com/premium_photo-1752434963682-0cc26bb2d4f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935")
// profile.appendChild(img);
// let h3=document.createElement("h3")
// let h4=document.createElement("h4")
// let p=document.createElement("p")
// card.appendChild(profile);
// card.appendChild(h3);
// card.appendChild(h4);
// card.appendChild(p);
// let form=document.querySelector("form");
// let input= document.querySelectorAll("input");
// let main= document.querySelector("main");

// form.addEventListener("submit",(dets)=>{
//     dets.preventDefault();
//     let card=document.createElement("div")
// card.classList.add("card")
// let profile =document.createElement("div")
// profile.classList.add("profile")
// let img =document.createElement("img")
// img.setAttribute("src",input[0].value)
// profile.appendChild(img);
// let h3=document.createElement("h3")
// h3.textContent=input[1].value
// let h4=document.createElement("h4")
// h4.textContent=input[2].value
// let p=document.createElement("p")
// p.textContent=input[3].value
// card.appendChild(profile);
// card.appendChild(h3);
// card.appendChild(h4);
// card.appendChild(p);
//  main.appendChild(card);
//  input.forEach((inp)=>{
// if(inp.type!=="submit"){
//     inp.value=""
// }
//  })
// })

let form=document.querySelector("form");
let input=document.querySelectorAll("input");
let h1=document.querySelector("h1")
let email=document.querySelector(".email")
let pass=document.querySelector(".pass")

form.addEventListener("submit",(dets)=>{
dets.preventDefault();
document.querySelector(".emailerror").textContent=""
document.querySelector(".passerror").textContent=""
const emailregex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passregex=/^(?=\S+$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

let emailvalid=emailregex.test(email.value);
let passvalid=passregex.test(pass.value);
let isvalis=true
if(!emailvalid){
    document.querySelector(".emailerror").textContent="Email incorrect"
   document.querySelector(".emailerror").style.display="initial"
   isvalis=false
}
if(!passvalid){
    document.querySelector(".passerror").textContent="pass incorrect"
   document.querySelector(".passerror").style.display="initial"
   isvalis=false
}

if(isvalis){
    h1.textContent="Form Sumbitted Succesfully"
    h1.style.color="green"
}
form.reset();
})