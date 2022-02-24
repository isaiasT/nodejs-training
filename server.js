/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar")
var rollbar = new Rollbar({
    accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', urlencodedParser, function (req, res) {
    res.send('Welcome, ' + req.body.username)
    rollbar.log('Welcome, ' + req.body.username)
})

app.post('/api/users', jsonParser, function (req, res) {
    res.send('Created user: ' + req.body.username)
    rollbar.log('Created user: ' + req.body.username)
})

app.listen(port, () => {
    console.log(`NodeJS Training running on port ${port}`)
})
