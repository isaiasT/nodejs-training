/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', urlencodedParser, function (req, res) {
    res.send('Welcome, ' + req.body.username)
})

app.post('/api/users', jsonParser, function (req, res) {
    res.send('Created user: ' + req.body.username)
})

app.listen(port, () => {
    console.log(`NodeJS Training running on port ${port}`)
})
