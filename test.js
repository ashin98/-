// // 输入[0,2,3,4,6,8,9]
// // 输出'0,2~4,6,8~9'

// function numSort (num) {
//   num = num.sort((a, b) => a - b)
//   const res = []
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] + 1 === num[i + 1] || num[i] - 1 === num[i - 1]) { // 如果当前数等于前一个数或者等于后一个数

//       if (res[res.length - 1] instanceof Set) { // 如果res里面最后一个是Set类型
//         res[res.length - 1].add(num[i])
//       } else {
//         res.push(new Set())
//         res[res.length - 1].add(num[i])
//       }
//     } else {
//       res.push(num[i])
//     }
//   }
//   let newRes = res.map(item => {
//     if (item instanceof Set) {
//       item = Array.from(item)
//       item = item.slice(0, 1) + '~' + item.slice(-1)
//     }
//     return item
//   })

//   return newRes.join(',')
// }
// console.log(numSort([0, 2, 3, 4, 5, 6, 8, 9, 10, 11]))

// function solution (list) {
//   let newList = []
//   for (let item = 0; item < list.length - 1; item++) {
//     // 将 原数组 和 彼此之间的差值 两两穿插合成一个新字符串，如果是相差1则插入@，反之则插入！ 
//     newList.push(list[item], list[item + 1] - list[item] === 1 ? '@' : '!')
//   }
//   console.log(newList)
//   // 最后一个数没有尾端的差值，因此直接插入即可 
//   newList.push(list[list.length - 1])
//   // 将连续三个连着@的值转化为'-'连接的形式，最后再去除@和！符号
//   return newList.join('').replace(/(-?\d*)@(-?\d*@)+(-?\d*)/g, '$1-$3').replace(/[@!]/g, ',')
// }

// console.log(solution([0, 2, 3, 4, 5, 6, 8, 9, 10, 11]))

// let input = [1, 2, 3, 4, 5, 7, 8, 9, 12, 14, 15, 16]
// let output = []

// let len = input.length
// let i
// for (i = 0; i < len; i++) {
//   console.log(i)
//   let start = input[i] // 1
//   let j
//   for (j = i; j < len; j++) {
//     if (input[j] + 1 !== input[j + 1]) {
//       break
//     }
//   }
//   i = j // i=4
//   if (start == input[j]) {
//     output.push(start)
//   } else {
//     output.push(start + "->" + input[j])
//   }
// }

// Array.prototype.add = function () {
//   return this.reduce((total, item) => {
//     return total + item
//   })
// }
// console.log(['a', 'b', 'c'].add())

// let arr4 = { a: 1, b: 2 }
// let arr5 = { a: 1, b: 2 }
// arr6 = [1, 2, 3]
// console.log(arr6.entries())

// var rotatedDigits = function (n) {

//   const map = new Map([[0, false], [1, false], [2, true], [3, false], [4, false], [5, true], [6, true], [7, false], [8, false], [9, true]])
//   let num = 0
//   function test (i) {

//     if (i === 2 || i === 5 || i === 6 || i === 9) return true
//     return false
//   }
//   for (let i = 1; i <= n; i++) {
//     if (i >= 10) {
//       let res = i + ''
//       let arr = res.split("")
//       arr = arr.map(Number)
//       const test = [0, 1, 2, 5, 6, 8, 9]
//       const test2 = [2, 5, 6, 9]
//       let p = 0
//       let q = 0
//       arr.forEach(item => {
//         if (test.indexOf(item) !== -1) {
//           p++
//         }
//         if (test2.indexOf(item) !== -1) {
//           q++
//         }
//       })
//       console.log(p, q)
//       if (p > 0 && q > 0) {
//         num++
//         p = 0
//         q = 0
//       }
//     }
//     if (map.get(i) === true) num++

//   }
//   return num
// }
// console.log(rotatedDigits(28))

// var a = 0
// if (true) {
//   console.log(a)
//   a = 1
//   function a () { }
//   a = 5
//   console.log(a)

// }
// console.log(a)
// let arr = { a: 1, b: 2 }
// for (let s in arr) {
//   console.log(s)
// }

function test (a, b, c) {
  console.log([...arguments])
}

test(1, 2, 3)