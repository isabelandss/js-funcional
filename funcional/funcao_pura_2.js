/**
 * impura - motivo: dados aleatórios (não determinístico)
 * com Math.random (efeitos colaterais de um possível temporizador)
 */
const gerarNumeroAleatorio = (min, max) => {
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(5, 6))