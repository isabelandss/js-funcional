const { from, Observable } = require('rxjs')

const createPipeable = operatorFn => source =>
  new Observable(subscriber => {
    source.subscribe(operatorFn(subscriber))
  })

const primeiro = () =>
  createPipeable(subscriber => ({
    next(value) {
      subscriber.next(value)
      subscriber.complete()
    }
  }))

const nenhum = () => 
  createPipeable(subscriber => ({
    next() {
      subscriber.complete()
    }
  }))

const ultimo = () => {
  let ultimo
  return createPipeable(subscriber => ({
    next(value) {
      ultimo = value
    },
    complete() {
      subscriber.next(ultimo)
      subscriber.complete(ultimo)
    }
  }))
}
  
from([1, 2, 3, 4, 5, 'isabela'])
  .pipe(
    primeiro(),
    // ultimo(),
    // nenhum(),
  )
  .subscribe(console.log)