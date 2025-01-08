const express = require('express')
const app = express()

app.post('/',(req,res) => {
    res.status(402).send('Problem in processing....')
})

app.get('/contact', (req,res) => {
    const{query} = req
    res.send({query})
})

app.get('/about/:id/edit/:num', (req,res) => {
    const{params} = req
    res.send({params})
})

app.listen(5000, () => {
    console.log('Server is started at http://localhost:5000')
    console.log('Press Ctrl+C to stop...')
}) 


/* API (Application Programming Interface)
 //Rest API  // Restfull API 

    1) CREATE -- POST
    2) READ  --  GET
    3) UPDATE -- PUT/PATCH
    4) DELETE -- DELETE
    
*/


//asti ko car ko jastaii homework banaune sabai params maa dekhaune parne //dynamic data halera kei banaune 