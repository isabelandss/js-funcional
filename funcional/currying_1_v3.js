function textoComTamanhoEntre(min) {
  return function(max) {
    return function(erro) {
      return function(texto) {
        // lazy evaluation

        const tamanho = (texto || '').trim().length

        if(tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  }
}

function aplicarValidacao(fn) {
  return function(valor) {
    try {
      fn(valor)
    } catch (error) {
      return { error }
    }
  }
}

const produto1 = {
  nome: 'A',
  preco: 14.99,
  desc: 0.25,
}

// curry permite criar versões parciais :)

// textoComTamanhoEntre(4)(255)('Nome inválido')(produto1.nome)

// const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
// forcarTamanhoPadrao('Nome inválido')(produto1.nome)

// const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
// const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')
// forcarNomeProdutoValido(produto1.nome)

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')
const validar = aplicarValidacao(forcarNomeProdutoValido)

console.log(validar(produto1.nome))