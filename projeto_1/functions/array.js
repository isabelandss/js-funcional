const getFilesByExtension = (ext = '.srt') => (arr = []) =>
  arr.filter(item => item.endsWith(ext))

const removeElementEmpty = (arr = []) =>
  arr.filter(item => item.trim())

const removeElementIfIncludes = (pattern = '') => (arr = []) =>
  arr.filter(item => !item.includes(pattern))

const removeOnlyNumbers = (arr = []) =>
  arr.filter(item => {
    const num = parseInt(item.trim())
    return num !== num // NaN === NaN (false)
  })

const removeSymbols = (symbols = []) => (arr = []) =>
  arr.map(item =>
    symbols.reduce((acc, symbol) =>
      acc.split(symbol).join(''), item)
  )

const orderBy = (attr = '', { sort = 'desc' } = {}) => (arr = []) => {
    const asc = (o1, o2) => o1[attr] - o2[attr]
    const desc = (o1, o2) => o2[attr] - o1[attr]
    return arr.sort(sort === 'desc' ? desc : asc)
  }

const joinElements = contents =>
  contents.join(' ')


const groupByWords = (words) =>
  Object.values(
    words.reduce((acc, word = '') => {
      word = word.toLowerCase()
      const qdte = acc[word] ? acc[word].qdte + 1 : 1
      acc[word] = { word, qdte }
      return acc
    }, {})
  )

module.exports = {
  getFilesByExtension,
  removeElementEmpty,
  removeElementIfIncludes,
  removeOnlyNumbers,
  removeSymbols,
  orderBy,
  joinElements,
  groupByWords,
}