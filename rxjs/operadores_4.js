const { from, Observable } = require('rxjs')

const primeiro = () => source => {
  return new Observable(subscriber => {
    source.subscribe({
      next(value) {
        subscriber.next(value)
        subscriber.complete()
      }
    })
  })
}

const nenhum = () => source => {
  return new Observable(subscriber => {
    source.subscribe({
      next(value) {
        subscriber.complete()
      }
    })
  })
}


const ultimo = () => source =>
  new Observable(subscriber => {
    let ultimo

    source.subscribe({
      next(value) {
        ultimo = value
      },
      complete() {
        subscriber.next(ultimo)
        subscriber.complete(ultimo)
      }
    })
  })

from([1, 2, 3, 4, 5, 'isabela'])
  .pipe(
    // primeiro(),
    // ultimo(),
    // nenhum(),
  )
  .subscribe(console.log)