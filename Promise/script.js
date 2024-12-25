// console.log(`1 ${new Date().getSeconds()}`);
// setTimeout(() => {
//   console.log(`2 ${new Date().getSeconds()}`);
// }, 1000);

// console.log(`3 ${new Date().getSeconds()}`);
// console.log(`4 ${new Date().getSeconds()}`);
// console.log(`5 ${new Date().getSeconds()}`);

// setTimeout(() => {
//   console.log(`6 ${new Date().getSeconds()}`);
// }, 0);

// console.log(`7 ${new Date().getSeconds()}`);
// console.log(`8 ${new Date().getSeconds()}`);
// console.log(`9 ${new Date().getSeconds()}`);
// console.log(`10 ${new Date().getSeconds()}`);

// let myName = "Wunmi";
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(myName === "Wunmi"){
//             resolve("yeah my name is Wunmi")
//         }else{
//             reject("you have the wrong person")
//         }
//     }, 3000)
// })

// function print(result){
//     console.log(result)
// }

// myPromise.then((value)=>{
//     return print(value)
// }).catch(reason => print(reason))



function promise_shower(){
    let shower =new Promise((resolve, reject)=>{
        setTimeout(function (){
            resolve(`2. Shower: ${new Date().getSeconds()}`)
        }, 3000);
    })
    return shower;
}
function promise_husband_cooks(){
    let cooks =new Promise((resolve, reject)=>{
        setTimeout(function (){
            resolve(`3. cook: ${new Date().getSeconds()}`)
        }, 3000);
    })
    return cooks;
}
function promise_eat(){
    let eat =new Promise((resolve, reject)=>{
        setTimeout(function (){
            resolve(`4. eat: ${new Date().getSeconds()}`)
        }, 3000);
    })
    return eat;
}
function promise_get_dressed(){
    let dressed =new Promise((resolve, reject)=>{
        setTimeout(function (){
            resolve(`5. get Dressed: ${new Date().getSeconds()}`)
        }, 3000);
    })
    return dressed;
}

console.log(`1. Wake up ${new Date().getSeconds()}`);
promise_shower().then(function(value){
    console.log(value)
})
promise_husband_cooks().then(function(data){
    console.log(data)
    return promise_eat()
}).then(function(datavalue){
    console.log(datavalue)
    return promise_get_dressed()
}).then(function(value){
    console.log(value)
})