/**
 * 防抖:debounce
 * n秒后执行该事件,若n秒内重复触发,则重新计时
 * 比如输入框,等用户输入结束或者暂停的时候,再执行keyup事件
 */
// 获取输入框
const input = document.querySelector('.input')
const debounce = function (fn, delay = 500) {
  let timer = null
  return function (...args) {
    // keyup事件执行的就是这个函数,this指向input输入框
    console.log(this)
    // 如果函数的最后一个命名参数以...为前缀，则它将成为一个由剩余参数组成的真数组
    if (timer) {
      // 如果timer存在就清除timer,比如输入 123 输入1的时候,没有timer,往下走生成timer,
      // 输入2的时候,就把1的timer清除了 也就是只保留最后一个timer
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      console.log(this)
      // 这里为啥非得用apply呢,不是因为this指向 而是function可能接收很多参数
      // 这种剩余参数就是和apply配合使用的
      fn.apply(this, args)
      // 还有一种写法 arguments
      // fn.apply(this,arguments)
      /**
       * arguments和...args主要区别:
       * 剩余参数(...args)只包含了那些没有形参的实参,而arguments对象包含了传给函数的所有参数
       * arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例
       * arguments对象还有一些附加的属性（如callee属性）
       * 在本例中 arguments不用传入,剩余参数你看,要传入 function (...args)
       */
      // 
    }, delay)
  }
}
const keyupHandler = function (e) {
  console.log('keyupHandler 执行')
  // console.log(this)
  console.log(e?.target?.value)
}
input.addEventListener('keyup', debounce(keyupHandler, 500), false)



/**
 * 节流:throttle
 * n秒内只运行一次,若在n秒内重复触发,只有一次生效
 * 可以保持一个频率连续触发,也就是把高频事件变成低频事件
 * 
 * 比如拖拽一个元素,要随时拿到该元素被拖拽的位置,
 * 拖拽事件会被频繁触发,可以用节流把高频事件变成低频事件
 * 还有比如上滑刷新也可以使用,比如用户手速太快,频繁触发网络请求,可以降低频率
 * 
 * 
 */
// 可拖拽
const throttle = function (fn, delay = 100) {
  let timer = null
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
      // clearTimeout(timer)
    }, delay)
  }
}
const dragHandler = function (e) {
  console.log(e.offsetX, e.offsetY)

}
const dragDom = document.querySelector('.drag')
dragDom.addEventListener('drag', throttle(dragHandler, 500), false)

