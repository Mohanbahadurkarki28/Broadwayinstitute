//object is used to enter the data in organize way with the help of the key and values
/* let person =['mohan',24,'kathmandu']
console.log(person[2]) */

/* let person ={
    'full name': 'Mohan Bahadur Karki',
    age: 24,
    "address": 'kathmandu',
    details:{
        phone:'9814714838',
        subject:['MERN','Full Stack Developer']
    }
} */
// console.log(person['full name'])
// console.log(person.details.subject)
// console.log(person.details.subject[1])


let person ={
    name:'MOHAN',
    age:22,
    address: 'Location A'
}
/* for(let k in person){
    console.log(k,person[k])
} */

/* //To get the keys value
//just like name age person
    console.log(Object.keys(person)) */

//To get the values answer
// just like the asnwer to the name: mohan where mohan is a values to the key of name
 /*    console.log(Object.values(person)) */


 //hasOwnProperty determine whether the key is true or not
 //jastai key maa age xa vane true dekhauxa xaina vane false
//  console.log(person.hasOwnProperty('age'))


let student ={
    //info le chai hamiali maathi ko code bata milxa jastai yaha maile maathi ko code lai tala ko sanga merge gareko xa
    //... 3 choti diyo vane chai spread operator use hunxa jasle chai key value lai organize way maa dekhauxa
    ...person,
    subjects: ['js', 'node','react'],
    group:'MERN 1:30pm'
}
    let{name,group,remaining}=student

console.log(name)
console.log(group)
console.log(remaining)


