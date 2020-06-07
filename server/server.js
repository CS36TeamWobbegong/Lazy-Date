//declare required imports
//express for server
const express = require('express');
//path for methods
const path = require('path')
//node-fetch
const nodeFetch = require('node-fetch')
//declare a router for api requests
// const apiRouter = require('./routes/api.js')


//initialize server
const app = express();

//initialize port
const PORT = 3000;

//set-up request processing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(path.resolve(__dirname, '../client')))
app.use('/build', express.static(path.resolve(__dirname, '../build')))
//handler for '/'
app.get('/', (req, res) => {
    console.log('inside first get');
    res.sendStatus(200)
})
//send /api requests to api router

// app.use('/api', apiRouter)

//generic app get handler
//route error handler
app.use('*', (req, res, err) => {
    console.log('inside error handler');
    res.sendStatus(404)
})
//app global error handler
app.use((err, req, res, next) => {
    // const errObj = {
    //    message: '500 Error' 
    // }

    res.sendStatus(500)
})
//call server to listen
app.listen(PORT, () => console.log(`now connected to port ${PORT}`));

//export server
module.exports = app