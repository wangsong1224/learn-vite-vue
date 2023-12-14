/**
 * 变量提升:
 * 实际上变量和函数声明在代码中的位置不会改变,而是在编译阶段,
 * [变量和函数会被放到变量环境中],变量的默认值会被设成undefined,
 * 在代码执行阶段,JavaScript引擎会从变量环境中去查找变量和函数
 * 
 */
//看看下面输出什么
showName()
// showName1() // Uncaught TypeError: showName1 is not a function
// showName2() // Uncaught ReferenceError: Cannot access 'showName2' before initialization
console.log(myName) //undefined
// console.log(myName1) //Uncaught ReferenceError: Cannot access 'myName1' before initialization
var myName = '王松'
var showName1 = function () {
  console.log('函数showName1被执行')
}
let showName2 = function () {
  console.log('函数showName2被执行')
}
let myName1 = '王松1'
function showName() {
  console.log('函数showName被执行')
}


/**
 * 过程分析,首先你要知道什么样的变量会提升
 * 1.var声明的变量和函数声明(也就是function aa(){}这种的)
 * 注意let,const不会提升 如果定义前使用会报错
 * 2.执行的时候,会从变量环境中寻找变量和函数
 */
// 第一部分.变量提升部分代码
// var myName = undefined
// var showName1 = undefined
// 整个函数都会被提升
// function showName() {
//   console.log('函数showName被执行')
// }

// 第二部分:执行部分代码
// myName = '王松'  //注意执行的时候才会给var声明的变量赋值
// showName1()
// showName2() 
// console.log(myName)
// console.log(myName1) 
// 再来一题
showNameA()
function showNameA() {
  console.log(1)
}
var showNameA = function () {
  console.log(2)
}
showNameA()
/**
 * 题解:先后输出1 2
 * 变量提升阶段:函数showName 和变量var showName=undefined
 * 然后执行showName(),输出1
 * 然后赋值操作:showName = function () {
      console.log(2)
    }
    再之后执行showName(),输出2

    将两个showName换一下顺序,输出结果也一样
    如下
 */
showNameB()
var showNameB = function () {
  console.log(2)
}
function showNameB() {
  console.log(1)
}
showNameB()

// export default {
//   showNameB
// }