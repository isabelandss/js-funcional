const path = require('path')

const getFile = path => new Promise(resolve => {
  fs.readFile(path, (_, file) => resolve(file.toString()))
})

const p = path.join(__dirname, 'dados.txt')
getFile(p)
  .then(console.log)