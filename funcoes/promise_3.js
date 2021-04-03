// const arr = [1, 2, 3]
// const [x,, y] = arr
// console.log(x, y)

function gerarNumeroEntre(min, max) {
  if(min > max) [min, max] = [max, min]

  return new Promise(resolve => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(aleatorio)
  })
}

gerarNumeroEntre(4, 5)
  .then(num => num * 10)
  .then(num => `O número gerado foi ${num}`)
  .then(console.log)