/**
 * 数字
 */

/**
 * 字符串
 */
let tmpStr = 'sdflajdflajsld'
console.log(tmpStr.charAt(1)) //d
console.log(tmpStr[1]) //d   可以使用下标

console.log(tmpStr.concat('123')) //sdflajdflajsld123 字符串拼接
console.log(tmpStr.indexOf('d')) // 1 返回字符在字符串中首次出现的位置
console.log(tmpStr.lastIndexOf('s'))// 从后往前遍历

str1 = 'GBDCFEA'
var strArr = str1.split('').sort(function (strVar, strExp) {
  return strVar.localeCompare(strExp)
})
console.log(strArr.join('')) // ABCDEFG  

console.log(tmpStr.slice(0, 1)) // sd
// 是否包含,包含为true
console.log(tmpStr.includes('sd')) // true
// startWith,endWith是否以某个字符串开头或结尾
// 第二个参数表示目标起始位置
tmpStr.startsWith('sd', 1)
tmpStr.endsWith('ld', 10)
// 重复字符串
let repeatStr = tmpStr.repeat(4)

/**
 * 正则
 */

/**
 * 数组
 */

/**
 * 对象
 */