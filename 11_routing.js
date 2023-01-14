/**
 * sending an html file to different routes
 */

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html')

  // 1 set folder path
  let path = './views/'

  // 2 update path depending on url
  switch (request.url) {
    case '/':
      path += 'index.html'
      response.statusCode = 200
      break;
    case '/about':
      path += 'about.html'
      response.statusCode = 200
      break;
    default:
      path += '404.html'
      response.statusCode = 404
      break;
  }

  // 3 read and send the file
  fs.readFile(path, (error, data) => {
    if(error) console.log(error), response.end()
    else response.end(data)
  })
})

server.listen(4000, 'localhost', () => {
  console.log('server started, listening on port 4000')
})
