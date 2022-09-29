function sortedArrayToBST (nums) { // [1,3,4,6,7,8]
  if (nums.length === 0) return null
  if (nums.length == 1) return new TreeNode(nums[0])
  let root = new TreeNode()
  let len = nums.length
  let mid = (len - 1) >> 1  // 相当于除2向下取整
  root.val = nums[mid]
  if (mid > 0) root.left = sortedArrayToBST(nums.slice(0, mid))
  if (mid < len - 1) root.right = sortedArrayToBST(nums.slice(mid + 1, len))
  return root

}