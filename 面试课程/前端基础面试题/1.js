/**
 * 列举强制类型转换和隐式类型转换?
 * 强制:parseInt() parseFloat() toString()
 * 隐式: +拼接字符串,逻辑运算,==,if
 */

/**
 * 手写深度比较模拟lodash isEqual?
 */
function isObject(data) {
  return data instanceof Object && data !== null
}
function isEqual(data1, data2) {
  // debugger
  // 判断是不是引用类型
  if (!isObject(data1) || !isObject(data2)) {
    return data1 === data2
  }
  // 判断传入的是否是同一个对象
  if (data1 === data2) {
    return true
  }
  // 如果key个数不相等,则不相等
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false

  // 以obj1为基准判断两个值是否相等
  for (let key in data1) {
    let res = isEqual(data1[key], data2[key])
    if (!res) return false
  }
  return true

}
// 测试
let obj1 = {
  a: 1,
  b: {
    c: 1,
    e: {
      q: 19
    }
  }
}
let obj2 = {
  a: 1,
  b: {
    c: 1,
    e: {
      q: 19
    }
  },
}
let set = new Set([1, 2])
let set2 = new Set([1, 3])
let map = new Map([['a', 1], ['c', 2]])
let map2 = new Map([['a', 1], ['b', 2]])
console.log(set instanceof Set)
console.log(set[1])
console.log(isEqual(set, set2))
// console.log(isEqual(map, map2))
// let result = isEqual(obj1, obj2)
// console.log(result)

function bb(obj) {
  console.log('for in start')
  for (let key in obj) {
    console.log(key)
    if (key === 'b') {
      // break和return都会跳出循环语句
      // break
      // return obj1[key]
    }
  }
}
bb(map)

/**
 * push,pop,shift,unshift
 * push和unshift 有参数,返回值是变更后数组length
 * pop和shift 没有传参,返回值是取出的数组项
 * 这四个方法都会改变原数组
 */
let arr = [1, 2, 3, 4, 5]
let resPush = arr.push(6)
console.log('arr=======')
console.log(resPush, arr)
let resUnshift = arr.unshift(0)
console.log(resUnshift, arr)
let resPop = arr.push(6)
console.log(resPop, arr)
let resShift = arr.push(6)
console.log(resShift, arr)

/**
 * 数组中的API,有哪些是纯函数?
 * 
 * 纯函数:
 * 1.不改变原来数据
 * 2.相同的输入,产生相同的输出
 * 3.不能有副作用,例如修改外部变量,state 网络请求 触发事件等等
 */
/**
 * 以下这些,都会返回一个新数组,不会影响原来的数组
 * concat map filter slice
 * 
 * 非纯函数
 * forEach some every reduce
 */

/**
 * 数组slice(截取)和splice(拼接)的区别?
 * 
 * slice是截取数组中元素,返回新数组,不改变原来数组,是纯函数
 * splice可以插入,替换,删除数组项,会改变原来数组,不是纯函数
 */
console.log('arr slice splice=======')
const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
// 从下标1开始,到4之前(也就是3) 
// 第二个参数不填就是从第一个参数截取到最后
const arrSlice = arr1.slice(1, 4)
console.log(arrSlice)
// 倒着截取
const arrSlice1 = arr1.slice(-2)

//splice (开始下标,[长度],要插入的数据)
console.log(arrSlice1)
//删除数组项
const arrDelete = arr2.splice(1, 1)
console.log(arrDelete, arr2)
//插入数组项
const arrInsert = arr2.splice(2, 1, 'a', 'b', 'c')
console.log(arrInsert, arr2)
//替换数组项
const arrReplace = arr2.splice(2, 0, 'replace')
console.log(arrReplace, arr2)

/**
 * [10,20,30].map(parseInt)返回结果是什么?
 * 返回[10,NaN,NaN]
 * 
 * 
 */
// console.log([10, 20, 30].map(parseInt))
// 可以翻译成如下代码
let result = [10, 20, 30].map((value, index) => {
  /**
   * parseInt(string,radix) : 解析一个字符串并返回指定基数的十进制整数
   * 第一个参数不是string,会调用toString转成字符串
   * 第二个参数radix表示要转换的进制接收(2-36的数字)
   * 在使用 parseInt 时，一定要指定一个 radix(这是个好习惯)
   * 
   * 十进制(Decimal)：
   * 取值数字 0-9；不用前缀。
   * 二进制(Binary)：
   * 取值数字 0 和 1 ；前缀 0b 或 0B。
   * 十六进制(Hexadecimal)：
   * 取值数字 0-9 和 a-f ；前缀 0x 或 0X。
   * 八进制(Octal)：
   * 取值数字 0-7 ；前缀 0o 或 0O (ES6规定)。
   * 
   * 进制转换
   * parseInt是把别的进制转成[十进制]
   * toString是把任意进制转成任意进制
   */
  /**
   * 这个题就是坑在这儿
   * 其实是接收了两个参数
   * 逐行执行其实是
   * parseInt(10,0) 
   * radix 是 undefined、0 或未指定的情况下,
   * 第一个参数 0x或0X开头,转成16进制  以别的值开头,转成十进制(也就是默认十进制)
   * parseInt(20,1)
   * 1,不在2-36之间 转成NaN
   * parseInt(30,2)
   * 2,二进制里面不可能有3 所以转出来的也是NaN
   */
  return parseInt(value, index)
})
console.log(result)

//进制转换
console.log('进制转换====')
let num = 0x8b
let str = '0x8b'
console.log(parseInt(num, 10))
// 告诉parseInt,我要转换的是个16进制的数 
console.log(parseInt(str, 16))
console.log(Number(num))
console.log(Number(str))
console.log(+num)
console.log(+str)

let num1 = 0x8b
console.log(num1.toString(2))
console.log(num1.toString(8))
console.log(num1.toString(10))
console.log(num1.toString(16))

/**
 * get请求和post请求的区别?
 * get请求表示查询操作,post表示新增操作
 * get参数拼接在URL上,post请求数据放在请求体内(数据体积可以比较大)
 * post易于防止CSRF
 */
