/**
 * 1.typeof能判断哪些类型
 * 2.何时使用===何时使用==
 * 3.值类型和引用类型的区别
 * 4.手写深拷贝
 */

/**
 * 什么是 值类型(基本类型)和引用类型(对象类型)?
 * JS内存模型分为栈和堆
 * 值类型的变量会保存在栈里
 * 引用类型的变量在栈里保存的是内存地址,这个内存地址指向真正保存变量的堆中
 * 
 * 那计算机为什么这么表示引用类型呢?为什么不用值类型的存储方式存引用类型?
 * 主要还是性能的考虑吧,因为引用类型占空间比较大,如果每次都是深拷贝会导致耗时较多
 */

/**
 * 1.typeof能判断哪些类型
 * 能识别所有值类型(undefined,字符串,数字,布尔,Symbol,bigInt)
 * 能识别函数
 * 能判断是否是引用类型
 */
// 能识别的
let a;
const str = ''
const n = 100;
const b = true;
const s = Symbol('s')
const big = BigInt(9999999999999999999999)
const func = () => { }
console.log(typeof a)  // 'undefined'
console.log(typeof str) // 'string'
console.log(typeof n) // 'number'
console.log(typeof b) // 'boolean'
console.log(typeof s) // 'symbol'
console.log(typeof big) // 'bigint'
console.log(typeof func) //'function'
//不能进一步识别的,全是object
console.log(typeof null)    // 'object'
console.log(typeof [1, 2])  // 'object'
console.log(typeof { a: 1 })  // 'object'
console.log(typeof new Date())  // 'object'
console.log(typeof /[0-9]/)    // 'object'

/**
 * 深拷贝
 */
const obj = {
  age: 20,
  arr: ['a', 'b', 'c'],
  obj1: {
    age: 24,
    name: 'wangsong'
  }
}

function deepClone(obj) {
  let result
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  // 判断是不是数组
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    // 保证key不是原型上的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

// 测试代码
let cloneObj = deepClone(obj)
cloneObj.obj1.age = 25
console.log('=======测试深拷贝===')
console.log(obj)
console.log(cloneObj)
let date = new Date()
let reg = /[1-9]/
let dateClone = deepClone(date)
console.log(dateClone)

/**
 * 变量计算-类型转换
 * 1.字符串拼接
 * 其他类型+字符串,都会把其他类型转换成字符串,然后拼接.所以还是用字符串模板吧 `${}`
 * 注意是加法运算,要是换成 - / * 会把字符串转成数字
 * console.log(100 - '10')
 */
// 字符串转数字
console.log(100 - '10') //90
console.log(100 * '10') //1000
console.log(100 / '10') //10
// 其他类型转字符串
console.log(100 + '10') //'10010'
console.log(true + '10') // 'true10'
console.log(NaN + '10') // 'NaN10'
console.log(undefined + '10') // 'undefined10'
console.log(null + '10') // 'null10'
// 这里报错: Uncaught TypeError: Cannot convert a Symbol value to a string
// console.log(Symbol('s') + '10') // 'true10'
console.log(BigInt(8888) + '10') // '888888888888888873975808010'

/**
 * 2.==运算符
 * 规则实在是不好记,除了判断null 剩下的一律用===
*/
const obj12 = { x: 100 }
// 
if (obj.a == null) { }
// 相当于
if (obj.a === null || obj.a === undefined) { }

/**
 * 3.if语句或者逻辑运算
 * truly变量: !!a===true    指的是经过两步非运算===true的变量
 * falsely变量: !!a===false 指的是经过两步非运算===false的变量
 * 比如:0 NaN '' null undefined false
 * 
 */
const aa = ''
// 这里其实判断的是truly或者falsely
if (aa) { }
// 还有下边的
console.log(0 && 10)      //找到假就返回
console.log('' || 'abc')  //找到真就返回
console.log(0 ?? 'abc')  //前面是null或者undefined,返回右侧的值