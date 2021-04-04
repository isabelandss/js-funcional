const compose = (...fns) => value =>
  fns.reduce(async (acc, fn) => {
    if(Promise.resolve(acc) === acc) {
      return fn(await acc)
    }
    return fn(acc)
  }, value)

const gritar = texto => texto.toUpperCase()
const enfatizar = texto => `${texto}!!!`
const tornarLento = texto => new Promise(resolve => {
  setTimeout(() => {
    resolve(texto.split('').join(' '))
  }, 3000)
})

// const resultado = compose(gritar, enfatizar, tornarLento)('para')

const exagerado = compose(gritar, enfatizar, tornarLento)
const resultado = exagerado('para')

resultado.then(console.log)