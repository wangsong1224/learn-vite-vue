// import { scopeLocal } from './作用域导入测试'
// import aaa from './作用域导入测试.js'
/**
 * 作用域:
 * 定义:作用域就是变量和函数的可访问范围,它是由词法作用域决定的,也叫静态作用域
 * 也就是根据声明的位置决定的
 * 分类:
 * 全局作用域:在代码中任何位置都能访问,其生命周期伴随着页面的生命周期
 * 函数作用域:在函数内部定义的变量和函数,只能在函数内部访问,函数执行完成后销毁
 * 块级作用域:就是一对大括号包裹,比如 函数,循环语句,判断语句,甚至一个单独的{}
 * 只在块级作用域内生效,let const声明的变量
 */
// 块级作用域
//if块
if (1) { }

//while块
// while (1) { }

//函数块
function foo() { }

//for循环块
for (let i = 0; i < 100; i++) { }

//单独一个块
{ }

// 举个例子 因为变量提升导致x最终都输出2,改为let声明就解决了
function varTest() {
  var x = 1;
  // let x = 1;
  if (true) {
    var x = 2;  // 同样的变量!
    // let x = 2;  // 同样的变量!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
console.log('varTest 执行==')
varTest()

//ES6 又是如何在函数级作用域的基础之上，实现对块级作用域的支持呢？ 举个例子
function foo1234() {
  var a = 1
  let b = 2
  {
    let b = 3
    var c = 4
    let d = 5
    // 可以打断点调试,看看作用域
    // debugger
    console.log(a)
    console.log(b)
  }
  // debugger
  console.log(b)
  console.log(c)
  // 到这里块级作用域已经被销毁了
  // console.log(d) // Uncaught ReferenceError: d is not defined
}
foo1234()


/**
 * 我们知道,执行上下文中有 变量环境,词法环境和this等
 * 
 * 在函数执行上下文中,
 * 变量环境存放:a c(c会穿透块级作用域,到函数作用域中)
 * 词法环境存放:b
 * 代码块中let声明的变量b d,不会放到函数执行上下文的词法环境中
 */

/**
 * 接下来看作用域链
 * 因为作用域是静态作用域,也就是由代码所在位置决定的
 * 所以bar 和 foo的上级都是全局作用域(注意这两个函数没有包含关系)
 */
function bar() {
  console.log(myName)
}
function foo() {
  var myName = "极客邦"
  bar()
}
var myName = "极客时间"
foo()

/**
 * 闭包:
 * 是一个函数和其绑定的周边环境状态(词法环境)的引用的组合
 * 闭包可以从内部函数访问外部函数的作用域,
 * 在JS中,闭包会随着函数的创建而被同时创建
 */
function foo11() {
  var myName = "极客时间"
  let test1 = 1
  const test2 = 2
  var innerBar = {
    getName: function () {
      console.log(test1)
      return myName
    },
    setName: function (newName) {
      myName = newName
    }
  }
  return innerBar
}
var bar = foo11()
bar.setName("极客邦")
bar.getName()
console.log(bar)
console.log(bar.getName())

let foo3 = () => {
  let a = 1;
  console.log('this', this)
  let foo4 = () => {
    console.log('this', this)
    let c = 2
    return (b) => {
      console.log('this', this)
      // 在这里打断点,可以清楚地看到闭包
      // 有两个闭包 foo3里面的a  和 foo4里面的c
      // 而且查找变量会按照当前执行上下文->闭包->全局执行上下文的顺序查找
      // debugger
      return a + b + c
    }
  }
  return foo4()
}
let closure = foo3()
console.trace(closure)
console.log(closure)
let r1 = closure(1)
let r2 = closure(2)
console.log(r1, r2)

/**
 * 闭包的常见形式:
 * 1.函数作为参数传递
 * 2.函数作为返回值被返回
 */
// 第二个比较常见,我们看看第一个
let c = 33
function f11() {
  console.log(c)
  // console.log(b) Uncaught ReferenceError: b is not defined
}
function f22(fn) {
  let b = 22
  fn()
}
f22(f11)

// 再看一题 
/**
 * 考察的还是作用域链的问题
 * 这种问题就是看考察this还是作用域链
 * this就是先分箭头函数和普通函数
 * 普通函数就看谁调用,
 * 箭头函数就看定义时父级作用域的this
 * 
 * 如果是变量的话就是看作用域了,
 * 首先得清楚作用域分为全局作用域,函数作用域和块级作用域
 * 然后脑子中形成图,一下就找出来了,这只能多练
 */
/**
 * 
 */
var bar = {
  myName1: "time.geekbang.com",
  printName: function () {
    console.log(myName1)
  }
}
function foo34() {
  let myName1 = "极客时间"
  return bar.printName
}
let myName1 = "极客邦"
let _printName = foo34()
_printName() //极客邦
bar.printName() //极客邦

// 
function foo12() {
  var myName = "极客时间"
  let test1 = 1
  const test2 = 2
  var innerBar = {
    getName: function () {
      // 这里打断点会查看闭包
      // debugger
      console.log(test1)
      return myName
    },
    setName: function (newName) {
      myName = newName
    }
  }
  return innerBar
}
var bar = foo12()
bar.setName("极客邦")
let barName = bar.getName()
console.log(barName) //极客邦

// // 然后测试下外部导入模块的表现
// let localStr = '456'
// scopeLocal()

/**
 * 闭包的应用
 * https://juejin.cn/post/7264183910597279799
 */
// 自执行函数
// 节流防抖
