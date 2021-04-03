const fileFns = require('./file')
const arrayFns = require('./array')
const stringFns = require('./string')
const helperFns = require('./helpers')

module.exports = {
  ...fileFns,
  ...arrayFns,
  ...stringFns,
  ...helperFns,
}