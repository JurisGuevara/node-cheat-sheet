/**
 * sending text as a response
 */

// 1 import the http library
const http = require('http')

// 2 call the create server method
const server = http.createServer((request, response) => {
  
  // 3 setting text as the content type
  response.setHeader('Content-Type', 'text/plain')

  // 4 sending the text as a response
  response.write('Hello Node')

  // 5 ending the response
  response.end()
})

// 3 start the server and listen to port 4000
server.listen(4000, 'localhost', () => {
  console.log('server started, listening on port 4000')
})
