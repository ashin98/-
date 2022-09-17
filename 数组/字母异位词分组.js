// 输入一个字符串数组， strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
  let map = new Map()
  for (let str of strs) {
    let arr = Array.from(str)
    arr.sort()
    let s = arr.toString() // 将每个元素转为有序的字符串
    let list = map.get(s) ? map.get(s) : new Array()
    list.push(str)
    map.set(s, list)
    console.log(map.values())
  }
  return Array.from(map.values())
}
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])