

function breakup(){
    const h1= document.querySelector("h1")
const h1text=h1.textContent;

const splittext=h1text.split("")
let halfwords=h1text.length/2

 let word=""
splittext.forEach(function(element,indx){
    if(indx<halfwords){
 word=word+`<span class="a">${element}</span>`
    }
    else{
 word=word+`<span class="b">${element}</span>`
    }
    
})

h1.innerHTML=word
}
breakup();

gsap.from(".a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})

gsap.from(".b",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})