/**
 * sending an html file as a response
 */

// 1 import the http library
const http = require('http')

// 5 import the file system library
const fs = require('fs')

// 2 call the create server method
const server = http.createServer((request, response) => {
  
  // 3 setting html as the content type
  response.setHeader('Content-Type', 'text/html')

  // 6 reading the file to be sent
  // 7 sending the file as a response
  // 8 ending the response
  fs.readFile('./index.html', (error, data) => {
    if(error) console.log(error), response.end()
    else response.write(data), response.end()
    // or pass the data directly to the end response
    // else response.end(data)
  })
})

// 3 start the server and listen to port 4000
server.listen(4000, 'localhost', () => {
  console.log('server started, listening on port 4000')
})
