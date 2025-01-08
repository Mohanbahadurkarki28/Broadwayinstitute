//promise API
// promise api le chai class ko object banayera return garxa 

const getTicket =() => new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (Math.random() >0.5) {
            resolve(true)
        }
        else{
            reject(false)
        }
    }, 2000)
})
const enterCinema = ticket => {
    if(ticket){
        console.log('Got Ticket')
        console.log('Watching Movie')
    }
    else{
        console.log('Housefull')
        console.log('No Entry')
    }
}
//async, await // then, catch
//now start with async & await

/* let ticket =false
try{
    ticket - await getTicket()
}
catch (error) {
    ticket=error
}

// console.log(ticket)
enterCinema(ticket)
console.log('Movie ended') */

getTicket()
.then((data) =>{
    enterCinema(data)
})
.catch((error) =>{
    enterCinema(error)
})
//finally maa vaneko yedi then maa hoos yaah catch maa yedi dubailai eautai data chaiyeko xa vane finally use garxaum hami ani yo last maa execute hunca
.finally(() => {
    console.log('Movie ended')

})