/* Asynchronous Javascript
 It is of two types 
1) call back method 
2) promise Api 

Now first we use the call back method
---purai function lai arguement maa pass garxa call back method le
*/

/* const demoA =() => {
    setTimeout(()=> {
        console.log('in demoA')
    }, 2000)
}
const demoB =()=>{
    console.log('in demoB')
}
demoA()
demoB() */


/* let ticket = false

const getTicket =(callback) =>{
    setTimeout(()=> {
        //math.random is used for the
        if(Math.random()>0.5) {
            ticket = true
            console.log('Got ticket')
        }
        else{
            ticket = false
            console.log('Housefull')
        }
        callback()
    }, 2000)
}

const enterCinema =() =>{
    if(ticket) {
        console.log('Watching Movie')
    } else {
        console.log('No entry')
    }

    console.log('movie ended')
}

//function pass garda chai () dinu pardaina 
getTicket(enterCinema)
 */


let Flight = false

const getFlight =(callback) =>{
    setTimeout(()=> {
        //math.random is used for the
        if(Math.random()>0.5) {
            flight = true
            console.log('Got the plane Ticket ')
        }
        else{
            flight = false
            console.log("Didn't get the plane ticket ")
        }
        callback()
    }, 2000)
}

const enterFlight =() =>{
    if(flight) {
        console.log('Boarding')
    } else {
        console.log(' entry')
    }

    console.log('Landed safely')
}
getFlight(enterFlight)