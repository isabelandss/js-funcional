/**
 * Higher-order Functions:
 * Funções que operam em outras funções,
 * tomando-as como argumentos ou retornando-as
 * (passar como parâmetro uma função e/ou retorna uma função)
 */

const somar = (a, b, c) => a + b + c
const multi = (a, b) => a * b

/** 
 * função que recebe como parametro uma função
 */

const executar = (fn, ...params) =>
  fn(...params)

console.log(executar(somar, 4, 5, 6))
console.log(executar(multi, 30, 40))


/**
 * função retornado uma função
 */
// const executar = (fn, ...params) => (textoInicial) =>
//   `${textoInicial} ${fn(...params)}`

// console.log(executar(somar, 4, 5, 6)('Primeiro cálculo:'))
// console.log(executar(multi, 30, 40)('Segundo cálculo:'))