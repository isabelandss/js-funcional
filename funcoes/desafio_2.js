const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const getProdutosFrageis = item => item.fragil
const getValorPorQuantidade = item => item.preco * item.qtde
const getMedia = (acc, item) => {
  const qtde = acc.qtde + 1
  const total = acc.total + item

  return {
    qtde,
    total,
    media: total / qtde,
  }
}

const res = carrinho
  .filter(getProdutosFrageis)
  .map(getValorPorQuantidade)
  .reduce(getMedia, { qtde: 0, total: 0, media: 0 })

console.log(res.media)


