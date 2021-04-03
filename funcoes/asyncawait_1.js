const esperarPor = (tempo = 2000) => {
  return new Promise((resolve) => {
    const random = Math.random()
    setTimeout(() => {
      resolve(random)
    }, tempo)
  })
}

// esperarPor(2000)
//   .then(() => console.log('1'))
//   .then(esperarPor)
//   .then(() => console.log('2'))
//   .then(esperarPor)
//   .then(() => console.log('3'))


async function executar() {
  const a1 = await esperarPor()
  console.log('1a', a1)
  const a2 = await esperarPor()
  console.log('2a', a2)
  const a3 = await esperarPor()
  console.log('2a', a3)
}

executar()