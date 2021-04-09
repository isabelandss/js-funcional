const path = require('path')
const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs/operators')
const _ = require('lodash')
const fns = require('./functions')

const _path = path.join(__dirname, '..', 'legendas')
const pathResultFile = path.join(__dirname, '..', 'projeto_1', 'result.json')

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!']

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

    // toArray(),
    // fns.groupByWords(),
    // map(arr => _.sortBy(arr, el => -el.qdte))

    groupBy(el => el),
    mergeMap(group => group.pipe(toArray())),
    map(words => ({ words: words[0], qtde: words.length })),
    toArray(),
    map(arr => _.sortBy(arr, el => -el.qtde))
  )
  .subscribe(a => console.log(a))