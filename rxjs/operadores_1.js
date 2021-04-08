/**
 * 1. operadores de criação
 * 2. operadores encadeáveis (pipeable)
 */

//de criação
const { of, from } = require('rxjs')

//pipeable
const { last, first, map } = require('rxjs/operators')

// from([1, 2, 'isabela', false, 'ultimo'])
of(1, 2, 'isabela', false, 'ultimo')
  // .pipe(last())
  // .pipe(first())
  // .pipe(map(v => v[0]))
  .pipe(
    last(),
    map(v => v[0])
  )
  .subscribe(valor => console.log(valor))