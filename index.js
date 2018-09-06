import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/', function(req, res) {
  res.send('hello world from express app')
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listen on port[${port}]`)
  }
})