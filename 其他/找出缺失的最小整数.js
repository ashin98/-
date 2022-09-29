function minNumberDisappeared (nums) {
  // write code here
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true)
  }
  let j
  for (j = 1; j <= map.size; j++) {
    if (!map.has(j)) {
      console.log('aa', map.has(j))
      return j
    }
  }
  return j
}
console.log(minNumberDisappeared([1, 2, 3, 5, 6]))