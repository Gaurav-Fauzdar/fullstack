let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("First promis success");
        resolve(10);
    },1*1000);
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("2nd promis success");
        resolve(20);
    },1*2000);
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3rd promis success");
        resolve(30);
    },1*3000);
});
let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("4th promis success");
        resolve(40);
    },1*4000);
});

let total=0;
Promise.all([p1,p2,p3,p4]).then((result)=>{
    for(var i in result){
        total += result[i];
    }
    console.log(Result:${result});
    console.log(Total Promise:${total});
}).catch((error)=>{
    console.log(Result:${error});
})