//Assignment to print the number between 1 to 9 in a pyramid style

// let rows = 9;
// let pattern = "";
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += num;
//    }   
//    pattern += "\n";
// }
// console.log(pattern);



let rows = 9;
let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 10 - n; num++) {
      pattern += num;
   }
   pattern += "\n";
}
console.log(pattern);