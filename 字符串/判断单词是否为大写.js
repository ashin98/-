//实现一个函数，输入一个单词，返回输入单词是否符合全大写、全小写、首字母大写规则，正确返回true，错误返回false
function check (word) {
  let toU = word.toUpperCase()
  let toL = word.toLowerCase()
  let initialU = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  if (word === toU || word === toL || word === initialU) {
    return true
  } else {
    return false
  }
}
console.log(check('AssS'))