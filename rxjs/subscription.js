// esperar 3000 milissegundos
// gerar numeros de 500 em 500 milissegundos
// depois de 5000 unsubscribe

const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const subscription1 = obs.subscribe(value => console.log('#1 ', value))
const subscription2 = obs.subscribe(value => console.log('#2 ', value))

// subscription1.add(subscription2)
const sub = new Subscription()
sub.add(subscription1)
sub.add(subscription2)

setTimeout(() => {
  // subscription1.unsubscribe()
  // subscription2.unsubscribe()
  sub.unsubscribe()
}, 5000)