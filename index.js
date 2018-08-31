require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', function(req, res) {
  res.send('hello world from express app')
})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`listen on port[${port}]`)
  }
})