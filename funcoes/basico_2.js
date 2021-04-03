function bomdia() {
  console.log('bom dia')
}

function executarQualquerCoisa(fn) {
  fn()
}

executarQualquerCoisa(bomdia)

function potencia(x) {
  return function(y) {
    return Math.pow(x, y)
  }
}

const potenciaDe2 = potencia(2)
const resultado = potenciaDe2(8)
resultado


// const potencia = x => y => Math.pow(x, y)
// const resultado = potencia(4)(9)
// resultado

//somar(3)(4)(5)
const somar = x => y => z => x + y + z
const res = somar(3)(4)(5)
res

//calcular(2)(3)(fn)
const soma = (x, y) => x + y
const sub = (x, y) => x - y
const calcular = x => y => fn => fn(x, y)

const resSoma = calcular(2)(3)(soma)
const resSub = calcular(2)(3)(sub)
resSoma
resSub