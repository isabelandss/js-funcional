const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const qtmaiorquezero = item => item.qtde > 0
const r1 = carrinho.filter(qtmaiorquezero)
console.log(r1)


Array.prototype.meuFilter = function(fn) {
  const mapped = []
  for (let i = 0; i < this.length; i++) {
    if(fn(this[i], i, this)) {
      console.log('aa')
      mapped.push(this[i])
    } 
  }

  return mapped
}

const resultMyFilter = carrinho.meuFilter(qtmaiorquezero)
console.log(resultMyFilter)