

function abcd(config){
   return function(notification){
   let note= document.createElement("div")
   note.classList.add("notification")
  
   let p=document.createElement("p")
   p.textContent=notification
   note.appendChild(p)
   document.querySelector(".container").appendChild(note)
//   note.classList.add(config.theme==="dark"?"dark":"light");
//   note.classList.add(config.positionX ==="right"?"right":"left")
//   note.classList.add(config.positionY ==="bottom"?"bottom":"top")
   }
}

let a=abcd({
    positionX :"right",
    positionY :"bottom",
    theme:"light"
})
a("me asch dummy ahe ")
setTimeout(()=>{
    a("me asch dummy ahe ")
},3000)
a("me asch dummy ahe ")
