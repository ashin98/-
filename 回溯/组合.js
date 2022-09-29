// 组合总和
// 输入： [1,2,3]
// 输出：所有不同的组合

var permute = function (nums) {
  const res = []
  const path = []
  backtracking(nums, nums.length, [])
  return res

  function backtracking (nums, len, used) {
    if (path.length == len) {
      res.push([...path])
    }
    //单层递归逻辑
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true //同一个，已经存在了
      backtracking(nums, len, used)
      path.pop()
      used[i] = false
    }
  }
}
console.log(permute([1, 2, 3]))

