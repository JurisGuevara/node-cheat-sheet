/**
 * read text from a file
 */

const fs = require('fs')

fs.readFile('./folder/readFile.txt', 'utf-8', (error, data) => {
  if(error) console.log(error)
  console.log(data)
})
