const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getTotais = item => item.qtde * item.preco
const somar = (acc, item) => acc + item

const totais = carrinho.map(getTotais)
const r1 = totais.reduce(somar)
console.log(r1)


Array.prototype.meuReduce = function(fn, inicial) {
  let acumulador = inicial
  for (let i = 0; i < this.length; i++) {
    if(!acumulador && i === 0) {
      acumulador = this[i]
      continue
    }

    acumulador = fn(acumulador, this[i], i, this)
  }
  return acumulador
}

const totais1 = carrinho.map(getTotais)
const r2 = totais1.meuReduce(somar)
console.log(r2)
