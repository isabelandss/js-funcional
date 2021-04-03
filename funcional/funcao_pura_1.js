/**
 * Uma função pura é aquela em que: 
 * 1 - o valor de retorno é determinado APENAS por seus valores de entrada, e
 * 2 - sem efeitos colaterais observáveis
 */

const PI = 3.14

//impura - motivo: variável externa
const areaCirc = (raio) => raio * raio * PI

//impura - motivo: variável externa (global)
const areaCirc2 = (raio) => raio * raio * Math.PI

//pura - motivo: depende só dos dados de entrada
const areaCirc3 = (raio, pi) => raio * raio * pi

console.log(areaCirc(10))
console.log(areaCirc2(10))
console.log(areaCirc3(10, Math.PI))