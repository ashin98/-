function sortedArrayToBST (nums) {
  if (nums.length === 0) return null
  if (nums.length == 1) return new TreeNode(nums[0])
  let root = new TreeNode()
  let len = nums.length
  let mid = (len - 1) >> 1
  root.val = nums[mid]
  if (mid > 0) root.left = sortedArrayToBST(nums.slice(0, mid))
  if (mid < len - 1) root.right = sortedArrayToBST(nums.slice(mid + 1, len))
  return root

}