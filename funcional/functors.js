// functors são objetos que implementam a função MAP
// que também é um wrapper de um valor

// array é um exemplo de functor
const numeros = [1, 2, 3, 4, 5, 6]
numeros.map

function TipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined
    },
    map(fn) {
      // if(this.invalido) {
      //   return TipoSeguro(null)
      // }
     
      const novoValor = fn(this.valor)
      return TipoSeguro(novoValor)
    },
    flatMap(fn) {
      return this.map(fn).valor
    }
  }
}

const resultado = TipoSeguro('Esse é um texto')
  .map(text => text.toUpperCase())
  .flatMap(text => text.split('').join(' '))

console.log(resultado)

