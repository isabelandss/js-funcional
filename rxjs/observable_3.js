/**
 * Desafio:
 * criar uma stream de números entre min e max com Observable
 */

const { Observable, noop } = require("rxjs");

const minMax = (min, max) => new Observable(subscriber => {
  Array(max - min).fill().map((_, i) => {
    subscriber.next(min + i)
  })

  subscriber.complete()
})

minMax(3, 9).subscribe(
  console.log,
  noop,
  () => console.log('cabô')
)