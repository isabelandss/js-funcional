const { Observable, noop } = require('rxjs')

const obs$ = Observable.create(subscriber => {
  subscriber.next('RXJS')
  subscriber.next('é bem')
  subscriber.next('poderoso!')

  if(Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('Que problema ein')
  }
})

obs$.subscribe(
  valor => console.log(valor),
  error => console.log(error),
  () => console.log('essa função é chamada quando complete é chamado')
)

//noop ignora a etapa
// obs$.subscribe(
//   valor => console.log(valor),
//   noop,
//   () => console.log('essa função é chamada quando complete é chamado')
// )

//outra forma de chamar o subscribe
//é preciso manter o das funções (next, error, complete)
// obs$.subscribe({
//   next(valor) {
//     console.log(valor)
//   },
//   error(err) {
//     console.log(err)
//   },
//   complete() {
//     console.log('Complete!')
//   }
// })