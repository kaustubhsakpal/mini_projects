let users = [
  {
    name: "Akanksha Sakpal",
    pic: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Creative designer who loves crafting beautiful user experiences."
  },
  {
    name: "Kaustubh Sakpal",
    pic: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Frontend developer passionate about building modern, responsive web apps."
  },
  {
    name: "Riya Sharma",
    pic: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Tech enthusiast with a knack for clean UI and smooth animations."
  },
  {
    name: "Aditya Mehta",
    pic: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "JavaScript and React.js learner who enjoys exploring new frameworks."
  },
  {
    name: "Neha Patil",
    pic: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Digital marketer focused on creative storytelling and brand growth."
  },
  {
    name: "Rohan Deshmukh",
    pic: "https://randomuser.me/api/portraits/men/37.jpg",
    bio: "Full-stack developer working on scalable and secure web systems."
  },
  {
    name: "Sneha Nair",
    pic: "https://randomuser.me/api/portraits/women/50.jpg",
    bio: "Aspiring mobile app developer passionate about Flutter and design."
  },
  {
    name: "Aryan Singh",
    pic: "https://randomuser.me/api/portraits/men/19.jpg",
    bio: "Backend developer who loves optimizing databases and APIs."
  },
  {
    name: "Pooja Verma",
    pic: "https://randomuser.me/api/portraits/women/77.jpg",
    bio: "UI/UX designer focusing on intuitive and accessible interfaces."
  },
  {
    name: "Karan Joshi",
    pic: "https://randomuser.me/api/portraits/men/28.jpg",
    bio: "Software engineer exploring AI integrations with modern web technologies."
  }
];
  
let flex=document.querySelector(".flex-wrap");
function showusers(arr){
    arr.forEach(function (user){
  
        let card=document.createElement("div")
        card.classList.add("card-container")
        card.style.backgroundImage=`url(${user.pic})`
        let h5=document.createElement("h5");
        h5.classList.add("h5");
        h5.textContent=user.name
         let p=document.createElement("p");
        p.classList.add("p");
         p.textContent=user.bio
         card.appendChild(h5);
         card.appendChild(p);
         flex.appendChild(card)
    })
}
showusers(users)

let input=document.querySelector(".inputshet");
input.addEventListener("input",function(dets){
    let newusers= users.filter(function(use){
       return use.name.toLowerCase().startsWith(dets.target.value)
     })
     flex.innerHTML=" "
     showusers(newusers) 
})


