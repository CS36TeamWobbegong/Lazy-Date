//declare required imports
//express for server
const express = require('express');
//path for methods
const path = require('path')
//node-fetch
const nodeFetch = require('node-fetch')
//declare a router for api requests
const apiRouter = require('./routes/api.js')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
require('dotenv').config();

const URI = process.env.MONGO_URI


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('CONNECTED TO MONGO DB'))
    .catch((err) => console.log('ERROR CONNECTING TO DB: ', err));

const Schema = mongoose.Schema;
const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: Array
})

const Users = mongoose.model('users', usersSchema);

//initialize server
const app = express();

//initialize port
const PORT = 3000;

//set-up request processing
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    console.log('req on initial get ->>>>>>>>', req)
    console.log(req.cookies, ' <====== req.cookies in initial get')
    if (req.cookies.test === 'practice') {
        return res.redirect('/home')
    }
    res.redirect('/signup.html');
})
//static files
app.use(express.static(path.resolve(__dirname, '../client')))
app.use('/build', express.static(path.resolve(__dirname, '../build')))
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/signup.html'))
// })

function verifyUser(req, res, next) {
    if (req.cookies.ambiguous) {
        return next();
    }
    res.redirect('/signup.html')
}

app.use('/home', verifyUser, express.static(path.resolve(__dirname, '../client')))
//send /api requests to api router
app.use('/api', apiRouter)

app.post('/signup', (req, res) => {
    console.log('do i show up')
    console.log(req.body)
    // create user in database using req.body for username and password with a create
    const username = req.body.username;
    const password = req.body.password;
    Users.create({ username, password }, (err, data) => {
        if (err) {
            console.log("ERROR IN CREATE USER")
            res.redirect('/signup.html')
        } else {
            console.log('SUCCESSFULLY ADDED USER')
            console.log(data)
            res.cookie('ambiguous', `${data._id}`, { httpOnly: true, maxAge: 1000000 })
            res.redirect('/home')
        }
    })

})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    Users.find({ username: username }, (err, result) => {
        if (err) {
            console.log('ERROR IN FIND USER');
            res.status(500).json('Error, check server log for details')
        }
        if (result.length === 0 || result[0].password !== password) {
            console.log('no results found with that username')
            // maybe just have something pop up on the page like yo go to the signup page or try again

            return res.redirect('/login.html');
        }
        console.log('SUCCESSFULLY LOGGED IN');
        console.log(result, '<--------------------------result')
        res.cookie('ambiguous', `${result[0]._id}`, { httpOnly: true, maxAge: 1000000 })
        res.redirect('/home');
    })
})

//generic app get handler
//route error handler
app.use('*', (req, res, next) => {
    console.log('inside error handler');
    res.sendStatus(404)
})
//app global error handler
app.use((err, req, res, next) => {
    const defaultError = {
        message: 'Server side error, please try again',
        log: '500 Error'
    }
    const errorMessage = Object.assign(defaultError, err)
    console.log(defaultError.log)
    res.status(500).send(errorMessage.message)
})
//call server to listen
app.listen(PORT, () => console.log(`now connected to port ${PORT}`));

//export server
module.exports = app