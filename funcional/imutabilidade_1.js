function ordernarComEfeitoColateral(arr) {
  return arr.sort()
}

function ordernar(arr) {
  /**
   * [...arr] é uma cópia de arr, previnindo os efeitos colaterais do sort()
   */
  return [...arr].sort()
}

const nums = [3, 1, 7, 9, 4, 6]
ordernarComEfeitoColateral(nums)
ordernar(nums)
console.log(nums)

// const nums = Object.freeze([3, 1, 7, 9, 4, 6])

