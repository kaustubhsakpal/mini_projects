// IPL teams data (2025-season snapshot)
const iplTeams = [
  {
    id: "MI",
    name: "Mumbai Indians",
    primaryColor: "#0057A7",
    secondaryColor: "#FFC72C",
    trophies: 5,
    trophyYears: "[2013, 2015, 2017, 2019, 2020]",
    captain: "Rohit Sharma",
    homeGround: "Wankhede Stadium, Mumbai",
    founded: 2008,
    owner: "Indiawin Sports Pvt. Ltd.",
    notes: "Most successful IPL franchise (5 titles)."
  },
  {
    id: "CSK",
    name: "Chennai Super Kings",
    primaryColor: "#FDB927",
    secondaryColor: "#002D62",
    trophies: 5,
    trophyYears:" [2010, 2011, 2018, 2021, 2023]",
    captain: "MS Dhoni (led in 2025 after Gaikwad was ruled out)",
    homeGround: "M. A. Chidambaram Stadium, Chennai",
    founded: 2008,
    owner: "Chennai Super Kings Cricket Ltd.",
    notes: "Legendary leadership and consistently deep runs in the tournament."
  },
  {
    id: "RCB",
    name: "Royal Challengers Bengaluru",
    primaryColor: "#DC1F26",
    secondaryColor: "#000000",
    trophies: 1,              // RCB won their first title in 2025
    trophyYears: "[2025]",
    captain: "Rajat Patidar (captain for 2025; Virat Kohli prominent leader)",
    homeGround: "M. Chinnaswamy Stadium, Bengaluru",
    founded: 2008,
    owner: "Royal Challengers Sports Pvt. Ltd.",
    notes: "Won maiden IPL title in 2025 (historic for long-time fans)."
  },
  {
    id: "KKR",
    name: "Kolkata Knight Riders",
    primaryColor: "#3A225D",
    secondaryColor: "#F7D54E",
    trophies: 3,
    trophyYears: "[2012, 2014, 2024]",
    captain: "Ajinkya Rahane",
    homeGround: "Eden Gardens, Kolkata",
    founded: 2008,
    owner: "Knight Riders Sports Private Limited",
    notes: "Purple & gold identity; multiple-time champions."
  },
  {
    id: "SRH",
    name: "Sunrisers Hyderabad",
    primaryColor: "#FF6A00",
    secondaryColor: "#000000",
    trophies: 1,
    trophyYears: [2016],
    captain: "Pat Cummins",
    homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
    founded: 2013,
    owner: "Sun TV Network",
    notes: "Known for orange/black branding and strong bowling units."
  },
  {
    id: "DC",
    name: "Delhi Capitals",
    primaryColor: "#0033A0",
    secondaryColor: "#E4002B",
    trophies: 0,
    trophyYears:" []",
    captain: "Axar Patel",
    homeGround: "Arun Jaitley Stadium, Delhi",
    founded: "2008 (as Delhi Daredevils)",
    owner: "GMR Group & JSW",
    notes: "Reached finals but yet to lift IPL trophy (through 2025)."
  },
  {
    id: "PBKS",
    name: "Punjab Kings",
    primaryColor: "#DC1E2B",
    secondaryColor: "#D9B68B",
    trophies: 0,
    trophyYears: "[]",
    captain: "Shreyas Iyer",
    homeGround: "PCA Stadium, Mullanpur",
    founded: "2008 (as Kings XI Punjab)",
    owner: "KPH Dream Cricket Pvt. Ltd.",
    notes: "Rebranded to Punjab Kings; strong fanbase in Punjab."
  },
  {
    id: "RR",
    name: "Rajasthan Royals",
    primaryColor: "#FF5A83",
    secondaryColor: "#005EB8",
    trophies: 1,
    trophyYears: "[2008]",
    captain: "Sanju Samson",
    homeGround: "Sawai Mansingh Stadium, Jaipur",
    founded: 2008,
    owner: "Rajasthan Royals Sports",
    notes: "Known for identifying young talent (Yashasvi Jaiswal etc.)."
  },
  {
    id: "GT",
    name: "Gujarat Titans",
    primaryColor: "#00A3E0",
    secondaryColor: "#FFD100",
    trophies: 1,
    trophyYears:" [2022]",
    captain: "Shubman Gill",
    homeGround: "Narendra Modi Stadium, Ahmedabad",
    founded: 2022,
    owner: "Irelia Sports",
    notes: "Champions in debutish years; strong team core."
  },
  {
    id: "LSG",
    name: "Lucknow Super Giants",
    primaryColor: "#1E2952",
    secondaryColor: "#FF8C00",
    trophies: 0,
    trophyYears: "[]",
    captain: "Rishabh Pant",
    homeGround: "BRSABV Ekana Cricket Stadium, Lucknow",
    founded: 2022,
    owner: "RPSG Group",
    notes: "New franchise (2022); competitive in early seasons."
  }
];

const btn=document.querySelector("button");
const main=document.querySelector("main");
const box=document.querySelector("#box");


btn.addEventListener("click",()=>{
    let random=iplTeams[Math.floor(Math.random()*iplTeams.length)]    
    main.style.backgroundColor=random.primaryColor
    box.style.backgroundColor=random.secondaryColor
    box.innerHTML=`<div class="team-card">
      <h2>${random.name} (${random.id})</h2>
      <p><strong>Captain:</strong> ${random.captain}</p>
      <p><strong>Trophies:</strong> ${random.trophies}</p>
      <p><strong>Trophy Years:</strong> ${random.trophyYears}</p>
      <p><strong>Primary Color:</strong> ${random.primaryColor}</p>
      <p><strong>Secondary Color:</strong> ${random.secondaryColor}</p>
    </div>`

})