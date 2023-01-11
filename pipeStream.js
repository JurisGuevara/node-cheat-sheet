/**
 * a shorter version of writeStream.js
 * read text chunks from a file and overwrite them into another
 */

const fs = require('fs')

const readStream = fs.createReadStream('./folder/readStream.txt', 'utf-8')
const writeStream = fs.createWriteStream('./folder/writeStream.txt')

readStream.pipe(writeStream)
