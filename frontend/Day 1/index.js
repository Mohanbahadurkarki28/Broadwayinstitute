//window
//console.log(window)

//document
//we basically use this more while writing javascript file
// console.log(document)

//screen
// console.log(screen)

//location
//console.log(location)

//navigator
// console.log(navigator)

/* let elem = document.querySelector('#btn').style.fontSize = "25px"
console.log(elem) */

/* document.querySelector('#btn')
 */

/* const handleClick = () =>{

} */

/* document.querySelector("#btn").addEventListener("click", () => {
  console.log("Clicked");
}); */

/* document.querySelector('#btn').onclick = () =>{
    console.log('Clicked')
} */

/* document.querySelector("#btn").onclick = () => {
  let data = document.querySelector("#inp").value;

  document.querySelector("#out").innerHTML = `<h1> ${data} </h1>`;
};
 */

//TASK
//build a calculator using html and  javascript
const method = (sign) => {
  let data1 = Number(document.querySelector("#input1").value);
  let data2 = Number(document.querySelector("#input2").value);
  let result;
  if (sign == "+") {
    result = data1 + data2;
  } else if (sign == "-") {
    result = data1 - data2;
  } else if (sign == "*") {
    result = data1 * data2;
  } else {
    result = (data1 / data2).toFixed(2);
  }

  document.querySelector("#output"
  ).innerHTML = `<h1>${data1} ${sign}  ${data2} = ${result} </h1>`;
};

document.querySelector("#addition").onclick = () => method("+");
document.querySelector("#subtraction").onclick = () => method("-");
document.querySelector("#multiplication").onclick = () => method("*");
document.querySelector("#division").onclick = () => method("/");