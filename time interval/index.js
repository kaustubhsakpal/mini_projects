let progreesbar=document.querySelector(".progress-bar");
let count=0;
let p=document.querySelector("p")
let h3=document.querySelector("h3")
let intv=setInterval(()=>{
    if(count<=99){
        count++;
        progreesbar.style.width=`${count}%`
        p.textContent=`${count}%`
    }
    else{
        h3.textContent="Downloded"
        h3.style.color="green"
         clearInterval(intv)
    }
},10*1000/100)