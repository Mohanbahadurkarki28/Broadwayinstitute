class User {
    constructor(name, age, address){
       this.name = name
       this.age = age
       this.address = address
    }
    getInfo=()=>{
       return `
       Name = ${this.name}
       Age = ${this.age}
       Address = ${this.address}`
    }
  }
 
  export default User