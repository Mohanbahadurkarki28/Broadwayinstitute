const express = require('express')
const app = express()
  
app.get('/',(req,res) => {
    res.send('Welcome to My Second hand Car Dealership!!!')
})

app.get('/brands', (req,res) => {
    const{query} = req
    res.send({query})
})


app.get('/suv', (req,res) => {
    const{query} = req
    res.send({query})
})

app.get('/hatchback', (req,res) => {
    const{query} = req
    res.send({query})
})

app.get('/sedan', (req,res) => {
    const{query} = req
    res.send({query})
})


app.get('/about', (req,res) => {
    const{params} = req
    res.send({params})
})

app.get('/contact', (req,res) => {
    const{query} = req
    res.send({query})
})


app.listen(5000, () => {
    console.log('Server is started at http://localhost:5000')
    console.log('press Ctrl+C to stop...')
})