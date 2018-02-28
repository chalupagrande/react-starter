const express = require('express')
const dbConnection = require('./db')

const app = express()

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use('/', express.static('build'))

app.listen(port)
console.log(`listening on ${port}`)
