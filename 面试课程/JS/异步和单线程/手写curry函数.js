/**
 * curry,函数柯里化 接收一个函数,返回另一个函数处理剩余参数
 * 是函数式编程的重要组成部分,redux就是基于函数式编程
 * 函数柯里化,只传递函数一部分参数调用它,让它返回一个函数去处理剩余的参数
 * 柯里化，不可变数据类型，纯函数等都是函数式编程中的概念。
 * 在React中这些概念很常见，因为React中很多涉及到函数式编程的概念。
 * fn.length 返回函数参数个数
 * 得把函数当做参数传递,而且返回一个函数
 */
/**
 * 例题,将一个求和函数柯里化,支持任意多个入参
 */
// 题目转换成 fn(1)(2)(3)(4)(5)的调用形式
function sum(a, b, c, d, e) {
  return a + b + c + d + e
}
// 解题
/**
 * @param {*function} fn 需要柯里化的函数
 * 1.看题目fn(1)必定要返回一个函数,我们假设这个函数叫fn1,然后继续调用:fn1(2)(3)(4)(5)
 * 接下来执行的是fn1(2),返回fn3
 * 执行fn3(4),返回fn4
 * 执行fn4(5),返回结果,结果其实还是调用原来的函数sum来求和
 * curry只是改变了调用形式
 * 
 * 2.这种任意多个参数,肯定要用到递归 递归就是要找到终止条件和递推公式
 * 终止条件:可以用入参,你看上面函数的参数,每次都只传入一个 但是最终要用sum求和的时候
 * 参数肯定是5个,所以args 是递增的
 * [1]  [1,2] [1,2,3]等等直到 [1,2,3,4,5]
 * 递增的参数args等于原函数参数的长度,直接调用原方法 返回结果
 * 递推公式:递增的参数args小于原函数参数的长度,继续执行递归函数
 * 
 * 3.这里有个apply绑定this,为什么?
 * 看下执行过程,执行完 let curried = curry(sum)
 * 变量curried保存了对curry函数返回值curried的引用 (引用类型)
 * 这是个普通函数,this取决于函数调用方式
 * 
 * [如果代码都不加apply:]
 * 先执行curried(1),进else 此时args=[1] 返回一个函数(它里面有闭包args)把这个函数叫fn1吧
 * 
 * 再执行curried(1)(2),相当于执行fn1(2),进else 此时args=[1] args2=[2]
 * 处理args.concat(args2)等于[1,2]
 * 
 * 接下来是重点,继续执行curried(1)(2)(3), 执行这一步的时候curried(...args)
 * args.concat(args2)的处理结果[1,2]当做参数传入,经过...args处理 变成了[[1,2]]
 * 这是...args函数剩余参数的用法,它会把参数包装成数组
 * 所以重点不是apply中的this,而是apply接收一个数组参数
 */

function curry(fn) {
  return function curried(...args) {
    console.log(args)
    if (args.length >= fn.length) {
      return fn.apply(this, args)
      // return fn(args)
    } else {
      return function (...args2) {
        // return curried.apply(this, args.concat(args2))
        return curried(args.concat(args2))
      }
    }
  }
}
// 验证结果
let curried = curry(sum)
console.log(curried(1)(2)(3)(4)(5))
// console.log(curried(1, 2)(3)(4, 5))

// 测试apply方法
function add(...args) {
  console.log('args========')
  console.log(args)
  return 1
}
add([1, 2]) //args=[[1,2]]
add.apply(this, [1, 2]) //args=[1,2]


//删除数组第2项
