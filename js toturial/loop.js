console.log("i am in loop");

let a=1
for(let i=0; i<100;i++){
    console.log(a+i);
}

let obj={
    name:"nmatin",
    role:"developer",
    company:" mt cration"
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log("key,element");
    
    
}