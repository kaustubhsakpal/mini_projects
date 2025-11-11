let form=document.querySelector("form")
let url=document.querySelector(".url")
let username=document.querySelector(".name")
let hometown=document.querySelector(".hometown")
let prupose=document.querySelector(".prupose")
let card_container=document.querySelector(".cards-container")

const use={
  users:[],
  init:function(){
    form.addEventListener("submit",this.sumbition.bind(this))
  },
  sumbition:function(e){
     e.preventDefault();
     if(url.value!=="" && username.value!=="" && hometown.value!=="" && prupose.value!=="" ){
       this.adduser();
     }else alert("Entered all the sections then only sumbit ")
     this.renderui();
      form.reset();
    
  },
  adduser: function(){
    this.users.push({
      url:url.value.trim(),
      username:username.value.trim(),
      hometown:hometown.value.trim(),
      prupose:prupose.value.trim()
    })
  },
  renderui:function(){
    card_container.innerHTML=""
   this.users.forEach((dets)=>{
       const card= document.createElement("div")
       card.classList.add("card")

       const img=document.createElement("img")
       img.src=dets.url
       card.appendChild(img)
       
       const info=document.createElement("div")
       info.classList.add("info")
       const h3=document.createElement("h3")
       h3.textContent=dets.username
       const p1=document.createElement("p")
       const p2=document.createElement("p")
       p1.innerHTML=`<strong>Home Town:</strong> ${dets.hometown}`
       p2.innerHTML=`<strong>Purpose:</strong>${dets.prupose}`
       info.append(h3,p1,p2)
       card.appendChild(info)
       card_container.append(card)

   })
  }

}
use.init()