const path = require('path')
const fns = require('./functions')

const _path = path.join(__dirname, '..', 'legendas')
const pathResultFile = path.join(__dirname, '..', 'projeto_1', 'result.json')

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']

fns.compose(
  fns.getFilesByFolder,
  fns.getFilesByExtension('.srt'),
  fns.getFileContents,
  fns.joinElements,
  fns.splitBy(`\n`),
  fns.removeElementEmpty,
  fns.removeElementIfIncludes('-->'),
  fns.removeOnlyNumbers,
  fns.removeSymbols(symbols),
  fns.joinElements,
  fns.splitBy(' '),
  fns.removeElementEmpty,
  fns.removeOnlyNumbers,
  fns.groupByWords,
  fns.orderBy('qdte', { sort: 'desc' }),
  fns.log,
  fns.writeFile(pathResultFile),
)(_path)