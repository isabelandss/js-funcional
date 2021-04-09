const { createPipeable } = require("./helpers")

// const getFilesByExtension = (ext = '.srt') => (arr = []) =>
//   arr.filter(item => item.endsWith(ext))
const getFilesByExtension = (ext = '.txt') => 
  createPipeable(subscriber => ({
    next(text) {
      if(text.endsWith(ext)) subscriber.next(text)
    }
  }))


// const removeElementEmpty = (arr = []) =>
//   arr.filter(item => item.trim())
const removeElementEmpty = () => 
  createPipeable(subscriber => ({
    next(text) {
      if(text.trim()) subscriber.next(text)
    }
  }))

// const removeOnlyNumbers = (arr = []) =>
//   arr.filter(item => {
//     const num = parseInt(item.trim())
//     return num !== num // NaN === NaN (false)
//   })
const removeOnlyNumbers = () =>
  createPipeable(subscriber => ({
      next(text) {
        const num = parseInt(text.trim())
        if(num !== num) subscriber.next(text)
      }
  }))

// const removeSymbols = (symbols = []) => (arr = []) =>
//   arr.map(item =>
//     symbols.reduce((acc, symbol) =>
//       acc.split(symbol).join(''), item)
//   )
const removeSymbols = (symbols = []) =>
  createPipeable(subscriber => ({
    next(text) {
      const textWithoutSymbols =
        symbols.reduce((acc, symbol) => acc.split(symbol).join(''), text)
      subscriber.next(textWithoutSymbols)
    }
  }))

// const groupByWords = (words) =>
//   Object.values(
//     words.reduce((acc, word = '') => {
//       word = word.toLowerCase()
//       const qdte = acc[word] ? acc[word].qdte + 1 : 1
//       acc[word] = { word, qdte }
//       return acc
//     }, {})
//   )
const groupByWords = () =>
  createPipeable(subscriber => ({
    next(arr) {
      const group = Object.values(
        arr.reduce((acc, word = '') => {
          word = word.toLowerCase()
          const qdte = acc[word] ? acc[word].qdte + 1 : 1
          acc[word] = { word, qdte }
          return acc
        }, {})
      )
      
      subscriber.next(group)
    }
  }))

module.exports = {
  getFilesByExtension,
  removeElementEmpty,
  removeOnlyNumbers,
  removeSymbols,
  groupByWords,
}