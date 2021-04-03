let qtdeExec = 0

//impura - motivo: efeitos colaterais observável
function soma(a, b) {
  qtdeExec++
  return a + b
}

console.log(soma(1, 1))