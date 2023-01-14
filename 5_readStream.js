/**
 * read text chunks from a file
 */

const fs = require('fs')

const readStream = fs.createReadStream('./folder/readStream.txt', 'utf-8')

readStream.on('data', (dataChunk) => {
  console.log(dataChunk)
})
