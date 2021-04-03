function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      reject('Ocorreu um erro!')
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('testando', 0.9)
  .then(
    valor => console.log(valor),
    error => console.log(`error esp.:`, error)
  )
  .then(() => console.log('fim!'))
  .catch(error => console.log('error:', error))