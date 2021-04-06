const readline = require('readline')

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp)
      rl.close()
    })
  })
}

function namorada(evento) {
  setTimeout(() => {
    console.log('N: apagar as luzes')
    console.log('N: pedir silêncio')
    console.log('N: Surpresa')
  }, 2000)
}

function sindico(evento) {
  setTimeout(() => {
    console.log('S: monitorando o barulho...')
  }, 1000)
}

async function porteiro(interessados = []) {
  while(true) {
    const resp = await obterResposta('O namorado chegou? (s/N/q)')

    if(resp.toLowerCase() === 's') {
      interessados.forEach(obs => obs({ resp, data: Date.now() }))
    } else if(resp.toLowerCase() === 'q') {
      break
    }
  }
}

/**
 * chamada de função que registra dois observadores
 * observers: namorada e sindico
 * subject: porteiro
 */

porteiro([namorada, sindico])