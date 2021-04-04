const eager = (a, b) => {
  const fim = Date.now() + 2500
  while(Date.now() < fim) {}

  const valor = Math.pow(a, 3)
  return valor + b
}

const lazy = (a) => {
  const fim = Date.now() + 2500
  while(Date.now() < fim) {}

  const valor = Math.pow(a, 3)

  return (b) => {
    return valor + b
  }
}

// console.time('#1')
// eager(1, 2)
// console.timeEnd('#1')

const lazy3 = lazy(3)

console.time('#2')
// console.log(lazy(1)(2))
console.log(lazy3(1))
console.timeEnd('#2')

