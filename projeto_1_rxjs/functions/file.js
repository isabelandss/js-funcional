const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

const getFilesByFolder = (p) =>
  new Observable(subscriber => {
    try {
      const files = fs.readdirSync(p)
      files.forEach(file => {
        const filePath = path.join(p, file)
        subscriber.next(filePath)
      })

      subscriber.complete()
    } catch (error) {
      subscriber.error(error)
    }
  })

const getFileContent = (p) =>
  new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(p, { encoding: 'utf-8' })
      resolve(content.toString())
    } catch (error) {
      reject(error)
    }
  })

const getFileContents = (paths = []) =>
  Promise.all(
    paths.map(p => getFileContent(p))
  )

const writeFile = (p) => content =>
  new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(p, JSON.stringify(content, null, 2), (_, data) => {
        resolve(data)
      }) 
    } catch (error) {
      reject(error)
    }
  })

module.exports = {
  getFilesByFolder,
  getFileContent,
  getFileContents,
  writeFile,
}