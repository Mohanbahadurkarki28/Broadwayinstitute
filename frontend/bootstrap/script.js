/* function sum(n1, n2=0)  {
   return n1+ n2

} */


/* const sum = (n1, n2=7) => n1+n2
   
let res1 = sum (42, 26.339897654323456783)
let res2 = sum(75, 25)

console.log (res1)
console.log(sum(res2, 400)) */

/* let colors = [
   "red", 
   ["orange", "blue",["white", "pink"]], 
   "green", 
   "yellow"]

console.log(colors)
console.log(colors[1][2][0]) */

/* //colors.push("white", "pink")
colors.splice(2,2)
console.log(colors) */ 

/* let person = {
   name: 'Mohan',
   age: '22',
   address: 'ktm'
} */

//we can only use data loop tesma  ni (for in loop) matrai milxa aru kunai ni mildaina
/* for(let k in person){
   console.log(k, person[k])
} */

  // console.log(Object.keys(person))
 // console.log(person.hasOwnProperty.age)

/*  let student = {
   //...vaneko spread opeartor ho jasle chai merge garxa code
   ...person,
   subject: ['Node', 'JS', 'React', 'HTML'],
   due: "cleared"
 } */
 //console.log(student)

/*  //object destructering
 let {age, name, ...remaining} = student
 //...reamining vaneko baaki sab lai ni print garnu vaneko ho
 console.log(age)
 console.log(name)
 console.log(remaining) */

 //JSON (JAVASCRIPT OBJECT NOTATION)

 //console.log(person)

/*  let jsonData = '{"name": "Person A", "age":25, "address":"ktm"}'
 let person = JSON.parse(jsonData)

 console.log(person)
 console.log(jsonData) */


 //import and export


/* import* as Fns from "./function.js"
import Person from "./user.js"

const userObj = new Person('Person A', 18, 'Location A')

console.log(userObj.getInfo())

 console.log(Fns.funcA())
 console.log(Fns.funcB())
 console.log(Fns.funcD())
 */

 /* const getTicket =() => new Promise((resolve, reject) => {
   setTimeout(() => {
      if(Math.random() >0.5){
         resolve('Ok')
      } else{
         reject('Not Ok')
      }
   }, 2000)
 })

 const watchMovie = ticket =>{
   if(ticket == 'Ok'){
      console.log('Got ticket')
      console.log('Watching movie')
   } else{
      console.log('Housefull')
      console.log('No Entry')
   }
 }


 //then catch garera async use grako 
getTicket().then(ticket => {
   watchMovie(ticket)
}).catch(error =>{
   watchMovie(error)
}).finally(() =>{
 console.log('Movie Ended')
}) */
  