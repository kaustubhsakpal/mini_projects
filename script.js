

const white=document.querySelectorAll(".white");

white.forEach((key,indx)=>{
key.addEventListener("click",()=>{
const audio=new Audio(`./songs/${indx+28}.mp3`)
audio.play()
})
})

const black=document.querySelectorAll(".black");

black.forEach((key,indx)=>{
key.addEventListener("click",()=>{
const audio=new Audio(`./songs/${indx+44}.mp3`)
audio.play()
})
});


document.addEventListener("keydown",(e)=>{
   console.log(e.key);
   if(e.key >='a' && e.key <= 'z'){
    const audio=new Audio(`./songs/${(e.key).charCodeAt(0)-69}.mp3`)
    audio.play();
   }
   if(e.key<='9'  && e.key>='0'){
    const audio=new Audio(`./songs/${Number(e.key)+28}.mp3`)
    audio.play();
   }
})
