const { interval } = require('rxjs')
const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')
const { map, concatAll } = require('rxjs/operators')

// interval(1000)
//   .pipe(
//     map(_ => [1, 2, 3]),
//     concatAll() //vai passar pra frente, um por um (transforma em higher-order observable em first order observable)
//   )
//   .subscribe(console.log)

const url = 'https://api.github.com/users/isabelandss/repos'
const createXHR = () => new XMLHttpRequest()

ajax({ url, createXHR })
  .pipe(
    map(resp => JSON.parse(resp.xhr.responseText)),
    concatAll(), //transformando o array em um stream de dados, ou seja, passando de um em um
    map(repo => repo.full_name)
  )
  .subscribe(console.log)