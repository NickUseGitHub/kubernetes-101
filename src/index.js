import http from 'http'

const port = process.env.PORT || 3000
const requestHandler = (request, response) => {
  console.log('request on', request.url)
  const something = process.env.SOMETHING
  response.end(`Hello Node.js Server:V2! This is env:SOMETHING = ${something}`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})