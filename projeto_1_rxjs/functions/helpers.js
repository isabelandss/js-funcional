const { Observable } = require("rxjs")

const log = (l) => {
  console.log(l)
  return l
}

const compose = (...fns) => value =>
  fns.reduce(async (acc, fn) => {
    if(Promise.resolve(acc) === acc) {
      return fn(await acc)
    }
    return fn(acc)
  }, value)


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
  log,
  compose,
  createPipeable,
}