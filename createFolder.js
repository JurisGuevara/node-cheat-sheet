/**
 * create folder if it does not exist yet
 */

const fs = require('fs')

if(!fs.existsSync('./newFolder')) {
  fs.mkdir('./newFolder', (error) => {
    if(error) console.log(error, 'spanky')
    console.log('folder created')
  }) 
} else {
  console.log('folder already exists')
}
