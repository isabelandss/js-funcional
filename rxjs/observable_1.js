const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
  resolve('Promise é top')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
  subscriber.next('Observer é top')
  //para um streaming de dados descomente essa linha
  // subscriber.next('Observer é top demais')

  //não será gerado mais nenhum valor, pois estou completando/encerrando
  subscriber.complete()
})

obs.subscribe(console.log)