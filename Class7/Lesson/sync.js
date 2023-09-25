// function corn() {
//   setTimeout(() => {
//     console.log("corn");
//   }, 3000);
// }

// function apple() {
//   console.log("apple");
// }

// corn();
// apple();
// //^^^^^^ apple will log to console first because of timeout func, then corn will print 3secs later //

// const apiReq = {
//   success: Math.random < 0.5,
//   data: "Data",
// };

// const myData = new Promise((resolve, reject) => {
//   if (apiReq.success) {
//     resolve(apiReq.data);
//   } else {
//     reject(new Error("Failed"));
//   }
// });

// myData
//   .then((done) => console.log("Done:", done))
//   .catch((error) => console.log("Error", error));
