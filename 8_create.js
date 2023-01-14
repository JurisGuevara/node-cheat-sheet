/**
 * creating an http server
 */

// 1 import the http library
const http = require('http')

// 2 call the create server method
const server = http.createServer((request, response) => {
  console.log('request made')
})

// 3 start the server and listen to port 4000
server.listen(4000, 'localhost', () => {
  console.log('server started, listening on port 4000')
})
