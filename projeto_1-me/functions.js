const fs = require('fs')
const path = require('path')

const _path = path.join(__dirname, 'legendas')

const getFiles = (path = _path) => {
  return new Promise(resolve => {
    fs.readdir(path, (_, files = []) => {
      resolve(files)
    })
  })
}

const getFilesByExtension = (arr, ext = 'srt') => arr.filter(item => item.includes(`.${ext}`))

const getFileContent = (file = '', dir = 'legendas') => {
  const p = path.join(__dirname, dir, file)

  return new Promise(resolve => {
    fs.readFile(p, (_, content) => {
      resolve(content.toString())
    })
  })
}

const getFileContents = async (files) => {
  const contents = []
 
  for (const item of files) {
    const content = await getFileContent(item)
    contents.push(content)
  }

  return contents
}

module.exports = {
  getFiles,
  getFilesByExtension,
  getFileContents,
  getFileContent,
}