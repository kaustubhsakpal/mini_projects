// animations basic
// gsap.from(".b",{
//     opacity:0,
//     // x:1200,
//     y:40,
//     duration:2,
//     delay:1,
//     stagger:1
// })


// paged animation 
// gsap.to(".page2 h1", {
// x: "-100%",
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".page2",
//     scroller: "body",
//     start: "top 0%",
//     end: "top -80%",

//     scrub: 2,
//     pin: true,
//     markers:true
//   },
// });



//line effect curve path
// let line=document.querySelector(".String");
// let path="M 10 100 Q 500 100 980 100";
// let initialpath ="M 10 100 Q 500 100 980 100";


// line.addEventListener("mousemove", function(dets){
//     path=`M 10 100 Q ${dets.x} ${dets.y} 980 100`
//   gsap.to("svg path",{
//     attr:{d:path},
//     duration:0.2,
//     ease:"power3.out"
//   })
// })

// line.addEventListener("mouseleave",()=>{
//     console.log("mouseleave");
//       gsap.to("svg path",{
//     attr:{d:initialpath},
//     duration:1,
//     ease:"elastic.out(1,0.2)"
//   })
// })


// cursor effect

// let cursor= document.querySelector(".cursor");
// let main= document.querySelector(".main");
// let image= document.querySelector(".image");

// main.addEventListener("mousemove",(dets)=>{
//  gsap.to(cursor,{
//     x:dets.x,
//     y:dets.y,
//     duration:0.5
//  })

// })

// image.addEventListener("mouseenter",(dets)=>{
//     cursor.innerHTML="<p>view more<p>"
//     gsap.to(cursor,{
//        scale:4,
//         backgroundColor:"rgba(255, 255, 255, 0.541)  "   
//     })
// })
// image.addEventListener("mouseleave",(dets)=>{
//     cursor.innerHTML=" "
//     gsap.to(cursor,{
//        scale:1,
//        backgroundColor:"rgba(255, 255, 255, 1) "  
//     })
// })