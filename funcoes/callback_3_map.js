const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
const r1 = nums.map(dobro)
console.log(r1)

const nomes = ['Isabela', 'Matheus', 'Cida']
const primeiraLetra = str => str[0]
const r2 = nomes.map(primeiraLetra)
console.log(r2)

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNome = item => item.nome
const r3 = carrinho.map(getNome)
console.log(r3)

const getTotal = item => item.qtde * item.preco
const r4 = carrinho.map(getTotal)
console.log(r4)

Array.prototype.meuMap = function(fn) {
  const mapped = []
  for(let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this))
  }

  return mapped
}

const r5 = carrinho.meuMap(getNome)
console.log(r5)
