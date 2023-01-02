// 1.ABC - CBA = CAB  954-459=495
function sum () {
  for (let a = 1; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      for (let c = 0; c < 10; c++) {
        if (99 * (a - c) == 100 * c + 10 * a + b) return [a, b, c]
      }
    }
  }
}
console.log(sum())

// 2.螺旋数组 输入n，输出1~n^2的螺旋数组
