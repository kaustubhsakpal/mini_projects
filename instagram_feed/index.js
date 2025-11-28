const reels = [
  {
    video: "veido/videoplayback (1).mp4",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Rohan Sharma",
    caption: "Chasing dreams ✨",
    likes: 340,
    shares: 22,
    comments: 45,
    istrue: true,
    isfollow: true,
  },
  {

    video: "veido/videoplayback (2).mp4",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Priya Patel",
    caption: "UI design is an emotion 💛",
    likes: 980,
    shares: 50,
    comments: 140,
    istrue: false,
    isfollow: true,
  },
  {

    video: "veido/videoplayback (3).mp4",
    profilePic: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Arjun Mehta",
    caption: "Manali vibes ❄️",
    likes: 1290,
    shares: 65,
    comments: 210,
    istrue: true,
    isfollow: false,
  },
  {

    video: "veido/videoplayback.mp4",
    profilePic: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Sara Khan",
    caption: "Workout grind never stops 💪",
    likes: 860,
    shares: 34,
    comments: 95,
    istrue: true,
    isfollow: true,
  },
  {

    video: "veido/videoplayback (3).mp4",
    profilePic: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Tech Master",
    caption: "AI will change everything 🤖",
    likes: 2000,
    shares: 120,
    comments: 300,
    istrue: false,
    isfollow: false,
  },
];
const container = document.querySelector("#instagram-feed-container");

function loadReels() {
  var sum = "";
reels.forEach((elem,indx) => {
  sum += ` <div class="reels">
           <div class="volume">
           <i class="ri-volume-mute-line"></i>
           </div>
              <video src="${elem.video}" autoplay muted loop></video>
            <div class="bottom">
                <img src="${elem.profilePic}" alt="">
                <span>${elem.name}</span>
                <button>${elem.isfollow ? "follow" : "unfollow"}</button>
            </div>
            <div class="bottom-down">
                <span>${elem.caption}</span>
            </div>
            <div class="right-box">

              <div class="like" id="${indx}">
              
                <h4 > ${
                  elem.istrue
                    ? '<i class="ri-heart-3-line"></i>'
                    : '<i class="ri-heart-3-fill  filllike"></i>'
                }</h4>
                <span>${elem.likes}</span>
              </div>
              <div class="comment ">
                <i class="ri-chat-1-line"></i>
                <span>${elem.comments}</span>
              </div>
              <div class="share">
                <i class="ri-share-forward-fill"></i>
                <span>${elem.shares}</span>
              </div>
              <div class="more">
              <i class="ri-more-2-fill"></i>
              </div>
            </div>
        </div>`;
  
});

container.innerHTML = sum;
}

container.addEventListener("click", (dets) => {
  console.log(dets.target.id);
});
loadReels();