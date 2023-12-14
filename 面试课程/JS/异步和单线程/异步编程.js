/**
 * 面试题
 * 1.请描述Event loop的机制,可画图
 * 2.什么是宏任务和微任务,两者有什么区别
 * 3.Promise有哪三种状态?如何变化?
 */

/**
 * 场景题
 * promise和then catch的连接问题
 */
// 1 3
// Promise.resolve().then(() => {
//   console.log(1)
// }).catch(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// })

// 1 2 3
// Promise.resolve().then(() => {
//   console.log(1)
//   throw new Error('error1')
// }).catch(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// })

// 1 2
// Promise.resolve().then(() => {
//   console.log(1)
//   throw new Error('error1')
// }).catch(() => {
//   console.log(2)
// }).catch(() => {
//   console.log(3)
// })

/**
 * 场景题
 * async/await语法
 */
// 打印什么
// async function fn() {
//   return 100
// }
// (async function () {
//   const a = fn()
//   const b = await fn()
//   console.log(a) //Promise {<fulfilled>: 100}
//   console.log(b) //100
// })()

//执行完毕打印什么
// (async function () {
//   console.log('start')
//   const a = await 100
//   console.log('a', a) //100
//   const b = await Promise.resolve(200)
//   console.log('b', b)//200
//   const c = await Promise.reject(300)
//   console.log('c', c)//Uncaught (in promise) 300
//   console.log('end')
// })()

// 打印顺序是什么
// console.log(100)
// setTimeout(() => {
//   console.log(200)
// })
// Promise.resolve().then(() => {
//   console.log(300)
// })
// console.log(400)

//打印顺序是什么
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
}, 0)
async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')
/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */

// 手写一个flat函数
/**
 * 
 * @param {扁平化层数} num 这个还没实现,还有就是调用方式,是直接调用,不是传参
 * @returns 
 */
const flat1 = function (num) {
  // 这里空间复杂度是n,有点高
  let result = []
  const repeat = function (arr) {
    if (!(arr instanceof Array)) {
      result.push(arr)
      return arr
    }
    arr.forEach((v, k) => {
      repeat(v)
    });
    return result
  }
  return repeat(arr)
}
Array.prototype.flat1 = flat1
//测试代码
let testArr = [[1], 2, [3, 4, [5, 6, [7]]]]
let flatArr = testArr.flat1()
console.log(flatArr)