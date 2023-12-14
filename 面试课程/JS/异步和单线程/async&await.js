/**
 * 出现原因:
 * 为了解决回掉地狱,出现了Promise这种可以支持链式调用的方法,
 * 但是Promise也是用回调函数的写法来写
 * async/await 可以用同步的语法来写异步代码,彻底消灭了回调函数
 * 
 * 
 */

/**
 * async/await和Promise的关系:
 * async/await是消灭异步回调写法的终极武器,
 * 但是和Promise并不互斥,反而是相辅相成
 * 
 * 执行async函数,返回的是Promise对象
 * await相当于Promise的then
 * try...catch可以捕获异常,代替了Promise的catch
 */

async function fn1() {
  return 100
}
const res1 = await fn1()
console.log('res1', res1)