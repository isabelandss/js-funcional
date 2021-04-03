const exec = (fn, x, y) => fn(x, y)
const somar = (x, y) => x + y
const subtrair = (x, y) => x - y

const r1 = exec(somar, 56, 38)
const r2 = exec(subtrair, 182, 27)
r1
r2
