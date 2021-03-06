const path = require('path')
const { toArray, map } = require('rxjs/operators')
const _ = require('lodash')
const fns = require('./functions')

const _path = path.join(__dirname, '..', 'legendas')
const pathResultFile = path.join(__dirname, '..', 'projeto_1_rxjs', 'result.json')

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!']

// fns.getFilesByFolder(_path)
//   .then(fns.getFilesByExtension('.srt'))
//   .then(fns.getFileContents)
//   .then(fns.joinElements)
//   .then(fns.splitBy(`\n`))
//   .then(fns.removeElementEmpty)
//   .then(fns.removeElementIfIncludes('-->'))
//   .then(fns.removeOnlyNumbers)
//   .then(fns.removeSymbols(symbols))
//   .then(fns.joinElements)
//   .then(fns.splitBy(' '))
//   .then(fns.removeElementEmpty)
//   .then(fns.removeOnlyNumbers)
//   .then(fns.groupByWords)
//   .then(fns.orderBy('qdte', { sort: 'desc' }))
//   .then(fns.log)
//   .then(fns.writeFile(pathResultFile))

fns.getFilesByFolder(_path)
  .pipe(
    fns.getFilesByExtension('.srt'),
    fns.getFileContent(),
    fns.splitBy('\n'),
    fns.removeElementEmpty(),
    fns.removeOnlyNumbers(),
    fns.removeSymbols(symbols),
    fns.splitBy(' '),
    fns.removeElementEmpty(),
    fns.removeOnlyNumbers(),
    toArray(),
    fns.groupByWords(),
    map(arr => _.sortBy(arr, el => -el.qdte)),
    fns.writeFile(pathResultFile),
  )
  .subscribe(a => console.log(a))