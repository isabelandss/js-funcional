const { Observable } = require("rxjs")

// RXJS
const createPipeable = operatorFn => source =>
  new Observable(subscriber => {
    const sub = operatorFn(subscriber)
    source.subscribe({
      next: sub.next,
      error: sub.error || (e => subscriber.error(e)),
      complete: sub.complete || (c => subscriber.complete(c)),
    })
  })


module.exports = {
  createPipeable,
}