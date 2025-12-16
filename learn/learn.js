//destructure

// let span=document.querySelector("span");
// let h1=document.querySelector("h1");
// let date= new Date();
// let hours=date.getSeconds();
// setInterval(()=>{
//   console.log(hours)
// h1.textContent=hours
// },1000)

// *****************************// //class ****************************************
//  class person{
//   constructor(name,age,email){
//         this.name=name,
//         this.age=age,
//         this.email=email
//   }

//   walk(){
//           // console.log("walking");
//     return "walking"
//   }
//     eat(){
//       console.log("eating");
//   }
//  }

//  let obj1=new person("kaustubh",21,"kaustubhsakpal1234@gmail.com")
//   console.log(obj1.walk())
//  obj1.eat()
// class human {
//     constructor(name,age,email){
//         this.name=name;
//         this._age=age;
//         this.email=email;
//     }

//     set hagu(val){
//        if(val<18) {
//         console.log("error");
//         // return
//        }
//        this._age=val;
//     }

//     get hagu(){
//         return this._age;
//     }

// }

// let h1=new human();
// h1.hagu=21;
// console.log(h1.hagu)

// let obj={
//     name:"kaush",
//     fuc:()=>{
//         (function abcd(){
//         (function ijkl(){
//             (function efgh(){
//                 console.log(this)
//             })()
//         })()
//         })()
//     }
// }
// obj.fuc();
// let num ="03064061526";
// let temp=n;
// let digit=0;
// let sum =0;
// while(temp>0){
//     digit++;
//      temp = Math.floor(temp / 10);
// }
// console.log("digit ="+ digit)
// if(digit!=10){
//     console.log(" no sbi");
//     return
// }
//        if(num.length!==10){
//         console.log("NO sbi")
//         return
//        }
//  let n=parseInt(num, 10);
// let result =0;
// for(let i=10;i>=1;i--){
//     let number= n%10;
//      result+=(number*i);
//      n=Math.floor(n/10);
// }
// if(result%11===0){
//     console.log(" sbi");
// }
// else {
//     console.log("No sbi")
// }
// console.log(result%11);
// let nStr = "12";
// let sum = 0;
// let n = Number(nStr);
// for (let i = 1; i <= n/2; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }

// sum > n ? console.log("Yes") : console.log("No");
// let nStr="153"
// let on = Number(nStr);
//  let n = Number(nStr);
//         let sum=0;
//         while(n>0){
//             let digit = n%10;
//             sum +=Math.pow(digit,nStr.length);
//             n=Math.floor(n/10)
//         }
//       return on===sum ? "Armstrong":"Not Armstrong";

// const isArmstrong = n => n === [...String(n)].reduce((a,d)=>a + d**String(n).length, 0);
// for (let i = 1; i <= n; i++) {

// leading spaces (2 spaces per unit)
// for (let k = 1; k <= n - i; k++) {
//     process.stdout.write("  ");
// }

// stars with trailing space (for grid alignment)
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }

//     console.log();
//     (25).toFixed
// }

// for (let i=1;i<=n;i++){
//         for( let k=1;k<=n-i; k++){
//              process.stdout.write("  ");
//         }
//     for(let j=1;j<=i;j++){
//        process.stdout.write("* ")
//     }
//     console.log()
// }

// function bringicream(address, fn1) {
//   fn1(function (fn3) {
//      console.log("hey2");
//     fn3(function(fn5){
//          console.log("hey5");
//         fn5(function(){
//             console.log("hey");

//         })
//     });
//   });
// }

// bringicream("alore", function (fn2) {
//   //fn1
//   console.log("hey1");

//   fn2(function (fn4) {
//      console.log("hey3");
//     fn4(function(fn6){
//          console.log("hey6");

//         fn6()
//     })
//   });
// });

// function instagrampost(username,cb){
//  setTimeout(() => {
//     cb()
//  }, 1000);
// }

// function metapost(unqiuenumber,cb2){
//  cb2(["bhtla","data"]);
// }

// instagrampost("harsh",function(data){
//   metapost(123,function(data){
//        console.log(data)
//   })
// })

// function loginuser(cb1){
//  setTimeout(()=>{
//     cb1({
//         name:"kaush",
//         id:1,
//         surname:"sakpal"
//     })
//  },1000)
// }

// function fetchpermission(userid,cb2){
//    setTimeout(()=>{
//      cb2(["read","write"])
//    },1000)

// }
// function loaddashbord(permission,cb3){
//     console.log(permission );

//     cb3()
// }

// loginuser(function(data1){
//   fetchpermission(data1.id,function(data2){
//    loaddashbord(data2,function(data3){
//             console.log("dashbordloaded");
//    })
//   })
// })

//promise
// fetch("https://official-joke-api.appspot.com/random_joke")
//   .then((raw) => raw.json())
//   .then((real) => {
//     console.log(real.setup);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const student = {
//     name: "Kaustubh Sakpal",
//     course: "Computer Engineering",
//     skills: ["Java", "JavaScript", "React", "Node.js"],
//     address: {
//         city: "Mumbai",
//         pincode: 400001
//     },
//     greet() {
//         return "Hello, " + this.name
//     }
// };

// let shalllocopy={...student};

// let depcopy=JSON.parse(JSON.stringify(student))

// function bringdata(s,cb){
//     cb(shalllocopy)
// }

// function taskcomplrted (info,cb2){
//     cb2()
// }

// bringdata(3,(maindets)=>{
//     taskcomplrted(maindets,()=>{
//         maindets.address.city="ratnagiri"
//         maindets.name="sir"
//         console.log(` ${maindets.greet()} my name is ${student.name} i live in ${maindets.address.city} `);

//     })
// })

function login(data,cb){
  cb(data)
}

function fetchdata(data2,cb2){
    cb2(data2)
}

function dashbord(data3,cb3){
    cb3(data3)
}

login(2,(datarecive)=>{

    console.log(` login...${datarecive}`);
fetchdata(3,(x)=>{
    console.log(` fetch...${x}`);
    
})
    dashbord(4,(x)=>{
       console.log(` dashbord...${x}`);
        
    })
}) 
