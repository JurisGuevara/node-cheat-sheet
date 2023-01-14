/**
 * redirecting routes
 */

/**
 * sending an html file to different routes
 */

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html')

  let path = './views/'

  switch (request.url) {
    case '/':
      path += 'index.html'
      response.statusCode = 200
      break;
    case '/about':
      path += 'about.html'
      response.statusCode = 200
      break;
    // redirects a route into another
    // real world examples are
    // old non-existing pages that users still try to access
    // end the response
    case '/about-old':
      response.setHeader('Location', '/about')
      response.statusCode = 301
      response.end()
      break;
    default:
      path += '404.html'
      response.statusCode = 404
      break;
  }

  fs.readFile(path, (error, data) => {
    if(error) console.log(error), response.end()
    else response.end(data)
  })
})

server.listen(4000, 'localhost', () => {
  console.log('server started, listening on port 4000')
})
