const { Observable } = require('rxjs')

// const of = (...elements) => new Observable(subscriber => {
//   elements.forEach((el, i) => {
//     setTimeout(() => {
//       subscriber.next(el)

//       if(elements.length === i + 1) {
//         subscriber.complete()
//       }
//     }, 1000 * (i + 1))
//   })
// })

const of = (...elements) => new Observable(subscriber => {
  elements.forEach((el, i) => {
      subscriber.next(el)

      if(elements.length === i + 1) {
        subscriber.complete()
      }
  })
})

of(1, 2, 3, 4, 5, 6, 'isabela')
  .subscribe(console.log)
