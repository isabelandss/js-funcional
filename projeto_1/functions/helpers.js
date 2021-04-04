const log = (l) => {
  console.log(l)
  return l
}

const compose = (...fns) => value =>
  fns.reduce(async (acc, fn) => {
    if(Promise.resolve(acc) === acc) {
      return fn(await acc)
    }
    return fn(acc)
  }, value)


module.exports = {
  log,
  compose,
}