function isPrime (num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) return false  // 如果不是数字或者不是整数则不是质数
  else if (num == 1 || num == 0 || num % 2 === 0) return false
  else {
    let squareRoot = Math.sqrt(num) // 开方
    for (let i = 3; i <= squareRoot; i += 2) {
      if (num % i === 0) return false
    }
  }
  return true
}



