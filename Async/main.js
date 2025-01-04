// // Asynchronous
// console.log(" I ")

// console.log(" eat ")

// setTimeout(() =>{
//     console.log(" icecream ")
// },4000)

// console.log(" with a ")

// console.log(" spoon ")

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["choclate", "peanuts"]
}

//promises
// let isShopOpen =true;

// let order = (time, work)=>{
//     return new Promise( (resolve, reject)=>{
//         if(isShopOpen){
//             setTimeout(() =>{
//                 resolve(work());
//             },time)
            
//         }
//         else{
//             reject(console.log("our shop is closed"))
//         }
//     } )
// }

// order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))
// .then(()=>{
//     return order(0000, ()=>console.log("production has started"));
// })
// .then(()=>{
//     return order(2000, ()=>console.log("fruit was chopped"));
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log("Start the machine"));
// })
// .catch(() =>{
//     console.log("customer left")
// })
// .finally(()=>{
//     console.log("day ended, so Shop is closed")
// })


// Async and Await
let isShopOpen = true;

let toppingsChoice = ()=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            console.log("which topping would you love")
        }, 3000)
    })
}

async function kitchen(){
    console.log("A")
    console.log("B")
    console.log("C")
    await toppingsChoice()
    console.log("D")
    console.log("E")
}

// async function order(){
//     try{
//         await abc;
//     }
// catch(error){
//         console.log("abc doesn't exist", error)
//     }
//     finally{
//         console.log("runs anyways")
//     }
// }

order();
