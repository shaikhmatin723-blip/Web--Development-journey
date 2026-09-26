// let arr =[{
//     Name:"Shaikh Matin",
//     Marks: 78,
// },
// {
//     Name:"John Doe",
//     Marks: 80,
// },
// {
//     Name:"Jane Smith",
//     Marks: 90,
// },
// {
//     Name:"Bob Johnson",
//     Marks: 85,
// },
// {
//     Name:"Alice Williams",
//     Marks: 92,
// }];



// // // // forEach Function

// // // arr.forEach((Student)=>{
// // //     console.log(Student.Marks);
// // // });


// // // // MAppp Function



// // // let sgpa = Student.map((el)=>{
// // //     return el.Marks/10;
// // // });


// // // let num = [1,2,3,4,5,6,7,8,9,10];
// // // let double= num.map((el)=>{
// // //     return el*2;
// // // });

// // // // Filter Function 
// // // let nums = [1,2,3,4,5,6,7,8,9,10];
// // //  let even = nums.filter((el)=>{
// // //     return el%2==0;
// // //  });



// // //  let randomArry= [2,4,5,6,,29,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// // //  max = -1;
// // //  for(let i= 0 ; i<randomArry.length ; i++){
// // //     if(max<randomArry[i]){
        
        
// // //             max = randomArry[i];
        
// // //     }
// // //  }  
// // //  console.log(max);



// // //  let arrMakking = [1,2,3,4,5,6,7,8,9,10];
// // //  let newArr= [...arrMakking];
// // //  console.log(newArr);


// // //  function sum(...arr){
// // //     for(let i=0; i<arr.length; i++){
// // //         console.log("you Give us a no =", arr[i]);
// // //     }
// // //  }

// // // function min(){
// // //     console.log(arguments);
// // // }
// // // min(1,2,3,4,5,6,7,8,9,10);



// // // let para1 =document.getElementById("p1");
// // // para1.innerText=  lorem14;
// // // document.querySelector("body").append("p1");
// // // para1.style.color="red";



// // // let heading =document.getElementById('h3');
// // // heading.innerText=  lorem14;
// // // document.querySelector("body").append("h3");
// // // heading.style.color="blue";



// // // let div = document.createElement("div");
// // // let h9 = document.createElement("h9");
// // // let p7= document.createElement("p");
// // // h1.innerText= "i am in a div";
// // // h9.innerText= "i am in a div";
// // // div.classList.add("box");
// // // div.append(h1);
// // // div.append(h9);
// // // div.append(p7);
// // // document.querySelector("body").aprepend(div);


// // // // DOM Events 
// // // // Events are signals that something has occurred .(userinput /action)

// // // // inLine Event Handlers


// // let btns = document.querySelectorAll("button");

// // for(btn of btns){

// //     btn.onclick = sayHello;


// //     btn.onmouseenter = function(){


// //         console.log("Mouse Entered");
// //     }
// //     console.log(btn);

// // }
// // function sayHello(){


// //     console.log("Hello");

// // }












// // Event Listeners

// // let btn = document.querySelector("button");

// // btn.addEventListener("click", function(){

// //     let h3 = document.querySelector("h3");
// //     let getcolor = getrandomcolor();
// //     h3.innerText= getcolor;
   
// //     let div = document.querySelector("div");
// //     div.style.backgroundColor= `rgb${getcolor}`;
// //      console.log("color updated");
// // })

// // function getrandomcolor(){
// //     let red = Math.floor(Math.random()*256);
// //     let green = Math.floor(Math.random()*256);
// //     let blue = Math.floor(Math.random()*256);
// //     let color= `(${red}, ${green}, ${blue})`;
// //     return color;

// // }

// // let p = document.querySelector("p");
// // p.addEventListener("click", function(){
// //     console.log("Paragraph clicked!");
// // });

// // let box = document.querySelector(".box");
// // box.addEventListener("mouseenter", function(){
// //     console.log("Mouse entered the box!");
// // });


// // *this in event listeners*
// // whrn "this" is used in a callback of event handler, of something it refers to the element on which the event is being called.    



// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function getChangecolor(){
//     console.dir(this,innerText);
//      this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click",getChangecolor);
// p.addEventListener("click",getChangecolor);
// h1.addEventListener("click",getChangecolor);
// h3 .addEventListener("click",getChangecolor);

// // Keyboard Events

//     let btn1 = document.querySelector("button");
//     btn1.addEventListener("click",function(e){
//         console.log(e);
//         console.log("Button Clicked");
//     });


//     // key dowm event
//      let inp = document .querySelector("input");
//      inp.addEventListener("keydown",function(e){
//         console.log("Key is Down");
//      });
//         // keyup event
//           let inp2 = document .querySelector("input");
//           inp2.addEventListener("keyup",function(e){
//             console.log(e.key);
//             console.log(e.code);
//             console.log("Key is Up");
//          });



// // Making Game character moving 
// let inp3= document.querySelector("input");
// inp3.addEventListener("keydown",function(e){
//     console.log(e.code);
//     if(e.code === "ArrowUp"){
//         console.log("Move up");
//     }
//     else if(e.code === "ArrowDown"){
//         console.log("Move Down");
//     }
//     else if(e.code === "ArrowLeft"){
//         console.log("Move Left");
//     }
//     else if(e.code === "ArrowRight"){
//         console.log("Move Right");
//     }
// });

// // Form Events

// let form = document.querySelector("form");
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     alret("Form Submitted");

// });

// // extracting data from form

// let form1 = document.querySelector("form");
// form1.addEventListener("submit",function(e){
//     let inp7 = document.querySelector("input");
//     e.preventDefault();
//     console.dir(form1);
//     // let name = this.elements(0);
//     // let age = this.elements(1);
//     // console.log(name.value);
//     // console.log(age.value);
//     // alert(`Hi ${name.value}, you are ${age.value} years old`);

// });



// let name = document.querySelector("#name");
// name.addEventListener("change",function(e){
//     console.log("Input Has been changed");
//     console.log(`Your current value is: ${this.value}`);
// }


let btn = document.querySelector("#add");

let ul = document.querySelector("ul");

let input = document.querySelector("input");

btn.addEventListener("click",function(e){

    let delBtn = document.createElement("button");
    delBtn.innerText= "Delete";
    btn.classList.add("btn");


    let li = document.createElement("li");

    li.innerText= input.value;
    li.appendChild(delBtn);

    ul.appendChild(li);

    input.value="";
});

ul.addEventListener("click",function(e){
    if (e.target.nodeName=="BUTTON"){
        let listItem = e.target.nodeName.parentElement;
        remove.listItem();
        alret("Task will Be Removed");
    }
    

})

