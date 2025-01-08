/* // import and export

const User = require('./user.js')
const {funcA, funcB, funcC, funcD, funcE, funcF, funcG, funcH} = require('./function.js')
let userObj = new User('person A', 12, 'Location A')
console.log(userObj.getInfo())
console.log(funcA())
console.log(funcD())
console.log(funcE()) */

import person from "./user.js"
import *as Fx from "./function.js"

const userObj = new person ('Person A', 16, 'Location A')
console.log(userObj.getInfo())

console.log(Fx.funcA())
console.log(Fx.funcC())
console.log(Fx.funcH())