const { createPipeable } = require("./helpers")

// const splitBy = (pattern = '') => content =>
//   content.split(pattern)
const splitBy = (pattern = '') =>
  createPipeable(subscriber => ({
    next(text) {
      text.split(pattern).forEach(element => {
        subscriber.next(element)
      })
    }
  }))

module.exports = {
  splitBy,
}