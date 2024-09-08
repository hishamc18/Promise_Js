//simple example for promise creation and consume
// const pr = new Promise((resolve, reject)=>{
//     value = true
//     if(value){
//         setTimeout(() => {
//             resolve("success")
//         }, 3000);
//     }
//     else{
//         reject("failed")
//     }
// })

// pr.then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//handling the same promise using async await
// async function getData() {
//     try {
//         let a = await pr
//         console.log(a);
                
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData();



//promise using car example
// const cart = ["shoes", "Kurta", "pants", "phone"];

// createOrder(cart)
// .then((orderId)=> console.log(orderId))
// .then((orderId)=> proceedToPayment())
// .then((info)=> orderSummary())
// .then((info)=> updateBalance())
// .catch((err)=>console.log(err));

// function createOrder(cart){
//     const pr = new Promise((resolve, reject) => {
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid")
//             reject(err.message)
//         }
//         const orderId = "12345"
//         if(orderId){
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000);
//         }
//     })
//     return pr
// }

// function proceedToPayment(orderId){
//     console.log("Payment is Succesfull");
    
// }

// function orderSummary (info) {
//     console.log("Order Summary");
// }

// function updateBalance(info){
//     console.log("Balance Updated");
    
// }

// function validateCart(cart){
//     return true
// }




//promise methods
// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("p1 Success"),5000);
// })
// const p2 = new Promise((resolve, reject)=>{
//     // setTimeout((resolve)=>resolve("p2 Success"),1000);
//     setTimeout(()=>reject("p2 failed"),1000);

// })
// const p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("p3 Success"),2000);
// })

// Promise.all([p1,p2,p3])
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));

// Promise.allSettled([p1,p2,p3])
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));

// Promise.race([p1,p2,p3])
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));

// Promise.any([p1,p2,p3])
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));