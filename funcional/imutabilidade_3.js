const pessoa = {
  nome: 'Maria',
  altura: 1.76,
  cidade: 'São Paulo',
  end: { rua: '' }
}

// pessoa.nome = 'João'

/**
 * ATRIBUIÇÃO por referência
 * console.log(pessoa): { nome: 'Isabela', altura: 1.66, cidade: 'São Paulo' }
 */
// const novaPessoa = pessoa
// novaPessoa.nome = 'Isabela'
// novaPessoa.altura = 1.66

/**
 * FUNÇÃO IMPURA
 * PASSAGEM por referência
 * console.log(pessoa): { nome: 'Isabela', altura: 1.66, cidade: 'São Paulo' }
 */
// function alteraPessoa(novaPessoa) {
//   novaPessoa.nome = 'Isabela'
//   novaPessoa.altura = 1.66
// }


/**
 * FUNÇÃO COM CLONAGEM RASA
 */
// function alteraPessoa(pessoa) {
//   const novaPessoa = { ...pessoa }
//   novaPessoa.nome = 'Isabela'
//   novaPessoa.altura = 1.66
//   return novaPessoa
// }

/**
 * FUNÇÃO COM CLONAGEM PROFUNDA
 */
function alteraPessoa(pessoa) {
  const novaPessoa = JSON.parse(JSON.stringify(pessoa))
  novaPessoa.nome = 'Isabela'
  novaPessoa.altura = 1.66
  novaPessoa.end.rua = 'abc'
  return novaPessoa
}


const novapessoa = alteraPessoa(pessoa)
console.log(pessoa, novapessoa)