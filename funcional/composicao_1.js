// function composicao(fn1, fn2) {
//   return function(valor) {
//     return fn2(fn1(valor))
//   }
// }

// function composicao(...fns) {
//   return function(valor) {
//     return fns.reduce((acc, fn) => {
//       return fn(acc)
//     }, valor)
//   }
// }

const compose = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value)

const gritar = texto => texto.toUpperCase()
const enfatizar = texto => `${texto}!!!`
const tornarLento = texto => texto.split('').join(' ')

// const resultado = compose(gritar, enfatizar, tornarLento)('para')

const exagerado = compose(gritar, enfatizar, tornarLento)
const resultado = exagerado('para')

console.log(resultado)