//declare required imports
//express for server
const express = require('express');
//path for methods
const path = require('path')
//declare a router for api requests
//const apiRouter = require(//define path)


//initialize server
const app = express();

//initialize port
const PORT = 3000;

//set-up request processing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//send /api requests to api router

//generic app get handler

//app global error handler

//call server to listen
app.listen(PORT, () => console.log(`now connected to port ${PORT}`));

//export server
module.exports = app