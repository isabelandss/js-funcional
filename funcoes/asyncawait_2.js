function gerarNumeroEntre(min, max, numerosProibidos = []) {
  if(min > max) [min, max] = [max, min]

  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min

    if(numerosProibidos.includes(aleatorio)) {
      reject('Número proibido!')
    } else {
      resolve(aleatorio)
    }
  })
}

async function gerarMegaSena(qdte, tentativas = 1) {
  const numeros = []

  try {
    for(let _ of Array(qdte).fill()) {
      const numero = await gerarNumeroEntre(1, 60, numeros)
      numeros.push(numero)
    }
  } catch (e) {
    if(tentativas > 10) {
      throw 'dá mais não'
    } else {
      return gerarMegaSena(qdte, tentativas + 1)
    }
  }

  return numeros
}

gerarMegaSena(8)
  .then(console.log)

// gerarNumeroEntre(1, 5, [1, 2, 4])
//   .then(console.log)
//   .catch(console.log)