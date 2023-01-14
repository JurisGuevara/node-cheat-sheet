/**
 * delete folder if it exists
 */

const fs = require('fs')

if(fs.existsSync('./oldFolder')) {
  fs.rmdir('./oldFolder', (error) => {
    if(error) console.log(error)
    console.log('folder deleted')
  }) 
}
