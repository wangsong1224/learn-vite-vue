// 手写promise
const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'
const FULFILLED = 'FULFILLED'
class FakePromise {
  constructor(executor) {
    // 开始就处于pending状态
    this.status = PENDING
    // 被resolved之后就是fulfilled状态,这个状态不能再改变,必须有个不可变的值(value)
    this.value = undefined
    // 被rejected之后处于rejected状态,不能再改变,要有个不可变的原因reason
    this.reason = undefined

    /**
     * 这时候我们肯定不能立即调onFulfilled或者onRejected的，因为fn到底成功还是失败还不知道呢。
     * 那什么时候知道executor成功还是失败呢？答案是executor里面主动调resolve或者reject的时候。
     * 
     * 上面这种暂时将回调保存下来，等条件满足的时候再拿出来运行让我想起了一种模式：订阅发布模式。
     */
    // 用两个数组将成功和失败的回调存起来
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    let resolve = (value) => {
      // debugger
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.forEach(callback => {
          // debugger
          callback(value);
        });
        this.status = FULFILLED
      }
    }
    let reject = (reason) => {
      // debugger
      if (this.status === PENDING) {
        this.onRejectedCallbacks.forEach(callback => {
          // debugger
          callback(reason)
        })
        this.status = REJECTED
      }
    }

    try {
      // debugger
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  // 必须有then方法来访问value或者reason
  // 接收两个参数 onFulfilled onRejected
  then(onFulfilled, onRejected) {
    // debugger
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
    if (this.status === PENDING) {
      // debugger
      this.onFulfilledCallbacks.push(onFulfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
  }
}


// 测试代码
const testPromise = new FakePromise((resolve, reject) => {
  // debugger
  setTimeout(() => {
    resolve('success')
    // if (Math.random() < 0.5) {
    // } else {
    //   reject('fail')
    // }
  }, 500);

}).then((res) => {
  // debugger
  console.log(res)
}, err => {
  // debugger
  console.log(err)
})
// .catch(e => {
//   console.log(e)
// })

// 手写防抖函数
// 第一个参数是需要进行防抖处理的函数，第二个参数是延迟时间，默认为1秒钟
// 这里多传一个参数，immediate用来决定是否要第一次立即执行, 默认为false
function debounce(fn, delay = 1000, immediate = false, resultCb) {
  // 实现防抖函数的核心是使用setTimeout
  // time变量用于保存setTimeout返回的Id
  let time = null
  // isImmediateInvoke变量用来记录是否立即执行, 默认为false
  let isImmediateInvoke = false

  // 将回调接收的参数保存到args数组中
  function _debounce(...args) {
    // 如果time不为0，也就是说有定时器存在，将该定时器清除
    if (time !== null) {
      clearTimeout(time)
    }

    // 当是第一次触发，并且需要触发第一次事件
    if (!isImmediateInvoke && immediate) {
      // 将函数的返回值保存到result中
      const result = fn.apply(this, args)
      if (typeof resultCb === 'function') {
        // 当用户传递了resultCb函数时，执行该函数，并将结果以参数传递出去。
        resultCb(result)
      }
      // 将isImmediateInvoke设置为true，这样不会影响到后面频繁触发的函数调用
      isImmediateInvoke = true;
    }

    time = setTimeout(() => {
      console.log('this==')
      console.log(this)
      // this指向定义函数所在作用域的对象
      // 使用apply改变fn的this，同时将参数传递给fn
      fn.apply(this, args)
      // 当定时器里的函数执行时，也就是说是频繁触发事件的最后一次事件
      // 将isImmediateInvoke设置为false，这样下一次的第一次触发事件才能被立即执行
      isImmediateInvoke = false
    }, delay)
  }

  // 防抖函数会返回另一个函数，该函数才是真正被调用的函数
  return _debounce
}

// 测试防抖
let test = 'test'
const testDebounce = debounce((test) => {
  console.log('执行了')
}, 200)
testDebounce()
testDebounce()
testDebounce()

export {
  testPromise
}