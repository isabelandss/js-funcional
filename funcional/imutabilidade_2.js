const nums = [4, 8, 3, 2, 9, 1, 9, 3]

// 1 - com dados mutáveis (RUIM)
let total = 0

for (let i = 0; i < nums.length; i++) {
  total += nums[i]
}

// 2 - com dados imutáveis usando reduce
const total2 = nums.reduce((acc, num) => acc + num, 0)

// 3 - com recursividade
const somar = (arr, total = 0) => {
  if(arr.length === 0) return total
  return somar(arr.slice(1), total + arr[0])
}

console.log(total)
console.log(total2)
console.log(somar(nums))