


let closes= document.querySelector(".close")
let plus= document.querySelector("#plus")

let form=document.querySelector("form");


closes.addEventListener("click",(e)=>{
    e.preventDefault();
    form.style.display="none"
})

plus.addEventListener("click",()=>{
    form.style.display="initial"
})


const card=document.querySelector(".card")
function showcard() {
  let alltask=JSON.parse(localStorage.getItem("tasks"));

alltask.forEach((task)=>{
  const card_container = document.createElement("div");
  card_container.classList.add("card-container");
  
  const profile = document.createElement("div");
  profile.classList.add("profilepic");
  
  const img = document.createElement("img");
  img.src = task.url;
  img.classList.add("img");
  profile.appendChild(img);
  card_container.appendChild(profile);
  
  const h3 = document.createElement("h3");
  h3.classList.add("h3");
  h3.textContent = task.namef;
  card_container.appendChild(h3);
  
  const box1 = document.createElement("div");
  box1.classList.add("box1");
  box1.innerHTML = `<p>Home Town</p><p>${task.home}</p>`;
  card_container.appendChild(box1);

  const box2 = document.createElement("div");
  box2.classList.add("box1");
  box2.innerHTML = `<p>purpose</p><p>${task.pur}</p>`;
  card_container.appendChild(box2);
  
  const call = document.createElement("div");
  call.classList.add("call");
  
  const btn = document.createElement("button");
  btn.classList.add("buttonc");
  
  
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-phone");
 btn.textContent="Call  "
  btn.appendChild(i);

  const message = document.createElement("h3");
  message.classList.add("h3")
  message.textContent = "Message";
  
  call.append(btn, message);
  card_container.appendChild(call);
  
  card.appendChild(card_container);
})
    
}
showcard();


//reqex
const urlPattern = /^(https?:\/\/)?([\w\-])+(\.[\w\-]+)+[/#?]?.*$/;
const namePattern = /^[A-Za-z\s]{3,40}$/;
const townPattern = /^[A-Za-z\s]{2,30}$/;
const purposePattern = /^[A-Za-z0-9\s,.!?-]{3,100}$/;
//input selection
const profilepic=document.querySelector('input[placeholder="Profile pic"]')
const fullname=document.querySelector('input[placeholder="Enter full name"]')
const HomeTown=document.querySelector('input[placeholder="Home town" ]')
const purpose=document.querySelector('input[placeholder="purpose"]')

//form validation
form.addEventListener("submit",(e)=>{
e.preventDefault();

const url=profilepic.value.trim();
const namef=fullname.value.trim();
const home=HomeTown.value.trim();
const pur=purpose.value.trim();
if(!urlPattern.test(profilepic.value)) {
  alert("url not correct");
  return;
}
if(!namePattern.test(fullname.value)) {
  alert("fullname not correct");
  return;
}
if(!townPattern.test(HomeTown.value)) {
  alert("hometown not correct");
  return;
}
if(!purposePattern.test(purpose.value)) {
  alert("purpose not correct");
  return;
}
const prioritySelected = form.elements.priority.value;
if (!prioritySelected) {
  alert("Please select a priority level");
  return;
}

else{
  alert("form sumbitted succesfully")
  form.reset()
  form.style.display="none";
}
  savelocalstorage({
    url,
    namef,
    home,
    pur,
    prioritySelected
  })
  location.reload();

})

function savelocalstorage(obj){
  if(localStorage.getItem("tasks")===null){
    let oldtask=[];
    oldtask.push(obj);
    localStorage.setItem("tasks",JSON.stringify(oldtask))
  }
  else{
    let oldtask=localStorage.getItem("tasks");
    oldtask=JSON.parse(oldtask);
    oldtask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldtask))
  }

}

const upbtn=document.querySelector("#upbtn")
const downbtn=document.querySelector("#downbtn")


upbtn.addEventListener("click",()=>{
  
  let lastchild=card.lastElementChild;
  if(lastchild){
    card.insertBefore(lastchild , card.firstElementChild)
    update();
  }
})
downbtn.addEventListener("click",()=>{
  
  let firstchild=card.firstElementChild;
  if(firstchild){
    card.appendChild(firstchild)
    update()
  }
})

function update(){
  const card_cardcontainer=document.querySelector(".card .card-container")
  card_cardcontainer.forEach(function(card,index){
    card.style.zIndex=3-index;
    card.style.transform=`translate(${index*10}) scale(${1-index*0.02})`
    card.style.opacity=`${1-index*0.02}`

  })
}