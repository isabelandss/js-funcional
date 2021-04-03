let p = new Promise((resolve) => {
  resolve(['Isabela', 'Matheus', 'Cida'])
})

p
  .then(valor => valor[0])
  .then(valor => valor[0])
  .then(valor => valor.toLowerCase())
  .then(console.log)