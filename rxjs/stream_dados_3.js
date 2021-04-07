const { interval, from } = require('rxjs')

const gerarNumeros = interval(500)

//estou me registrando
//a cada numero gerado, é chamado uma função
const subscription = gerarNumeros.subscribe(num => {
  console.log(Math.pow(2, num))
})

setTimeout(() => {
  subscription.unsubscribe()
}, 5000)

from([1, 2, 3]).subscribe(console.log)