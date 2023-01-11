/**
 * overwrites text into a file
 * creates the file if it does not exist
 */

const fs = require('fs')
const text = 'Hello node'

fs.writeFile('./folder/writeFile.txt', text, (error) => {
  if(error) console.log(error)
  else console.log('file written')
})
