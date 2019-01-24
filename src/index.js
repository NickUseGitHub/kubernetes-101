import http from 'http'

const port = process.env.PORT || 3000
const requestHandler = (request, response) => {
  const something = process.env.SOMETHING

  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.end(`Hello Node.js Server:V3!<br />This is env:SOMETHING = ${something}<br/> uri:${request.url}`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})