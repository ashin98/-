// 查找算法有：顺序查找、二分查找、插值查找、树表查找、分块查找、哈希查找


// 给定一个有序（非降序）数组，可能含有重复元素，求最小的i使得A[i]等于target，不存在则返回-1
// target = 7 ,return 5
// target = 8, return -1
function binary_search (arr, item) {
  let low = 0
  height = arr.length - 1
  while (low < height) {
    let mid = parseInt((height + low) / 2)
    let guess = arr[mid]
    if (guess == item) {
      return mid
    } else if (guess > item) {
      height = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
let myArr = [1, 2, 3, 5, 6, 7, 7, 10]
console.log(search(myArr, 11))   // 最后输出的是7对应的索引下标 5
// console.log(binary_search(myArr, 8))   // 找不到8 输出的是 -1

function search (arr, item) {
  let low = 0
  let high = arr.length - 1

  while (low < high) {
    let mid = parseInt((low + high) / 2)
    if (arr[mid] === item) {
      return mid
    } else if (arr[mid] < item) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}