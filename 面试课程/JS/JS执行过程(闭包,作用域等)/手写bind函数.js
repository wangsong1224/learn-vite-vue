/**
 * 面试题
 * 1.this的不同应用场景,如何取值
 * 2.手写bind函数
 * 3.闭包在实际开发中应用场景,举例说明
 */
function fn1(a, b, c) {
  console.log(arguments)
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}
// const fn2 = fn1.bind({ name: 'abc' }, 1, 2, 3)
// fn2()

/**
 * bind什么特点
 * 1.返回一个函数
 * 2.多个参数,第一个指向this
 */
Function.prototype.bind1 = function () {
  console.log(arguments[0])
  /**
   * 获取参数,用arguments:它是一个[类数组对象],代表传给一个function的参数列表
   * var this1 = arguments.shift()// 报错,arguments不是个数组!!!
   * 那第一步就是把用arguments转成数组
   * 可以用下面的方法
   * 为什么呢,slice 方法得到的结果是一个数组，参数便是 arguments。
   * 事实上，满足一定条件的对象都能被 slice 方法转换成数组。看个例子：
   * const obj = { 0: "A", 1: "B", length: 2 };
   * const result = [].slice.call(obj);
   * console.log(Array.isArray(result), result);
   */
  // const arg = Array.prototype.slice.call(arguments)
  // Array.from也能将类数组对象转成数组
  const arg = Array.from(arguments)

  /**
   * 第二部,获取传入的this,也就是数组第一项
   * 取出来之后,arg剩余的就是数组其余项
   */
  const this1 = arg.shift()
  // fn1.bind1(...) 中的fn1,谁调用就指向谁,哪怕调用者是个函数
  // console.log('this==========')
  // console.log(this)
  const self = this
  return function () {
    // debugger
    return self.apply(this1, arg)
  }
}

// 测试bind1
/**
 * 我们解释下过程
 * 首先看调用,fn1.bind1 这是个普通函数调用 bind1里面的this就指向了调用方fn1
 * bind1执行完成后返回一个函数,然后赋值给了fn3
 * 就相当于了如下代码
 * fn3=function(){
 *   return self.apply(this1,arg)
 * }
 * 然后里面的变量self,this1,arg从哪里来呢  闭包!
 */
const fn3 = fn1.bind1({ name: '王松' }, 4, 5, 6)
fn3()
