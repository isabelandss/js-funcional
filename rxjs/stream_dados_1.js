function gerarNumeros() {
  return {
    iniciar(fn, intervalo = 1000) {
      let numero = 0
      const i = setInterval(() => {
        fn(numero++)
      }, intervalo);

      return {
        parar() {
          clearInterval(i)
        }
      }
    }
  }
}

const temp1 = gerarNumeros()
const exec1 = temp1
  .iniciar(numero => {
    console.log(numero * 2)
  }, 1000)
//exec1.parar()

const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(a => {
  console.log(a + 100)
}, 2000)
//exec2.parar()