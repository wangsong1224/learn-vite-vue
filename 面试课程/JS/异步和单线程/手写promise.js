/**
 * @description 
 * @author 王松
 */
/**
 * 手写Promise
 * 目标:
 * 1.基本语法
 * 2.支持then和catch的链式调用
 * 3.支持基本的API all race resolve reject
 * 
 * 什么叫回调,就是把函数当做参数传递给另外一个函数,然后在[合适的时机]被另一个函数调用
 * 是一种[控制反转]
 * 
 * 比如下面p1实例被创建的时候,传入了一个函数,有两个参数 resolveHandler,rejectHandler 这两个参数还是函数
 * 我们知道,new MyPromise(function(){}) 里面的函数会立即执行
 * 所以传入的fn要立即执行 而fn执行的时候有两个参数函数,这两个参数函数要在MyPromise中定义
 * 相当于又把 resolveHandler,rejectHandler 这两个函数执行时机的控制权交给了p1
 * 
 * 然后看then的实现,也接收两个参数resolve,reject(都是函数),又把控制权交给了MyPromise
 * 根据我们理解的Promise的用法,一定是在fulfilled状态下,才会调用then中的方法
 * 但是resolveHandler得执行可能同步也可能异步,怎么办呢?我们可以在then调用的时候把resolve
 * [存起来] 在resolveHandler执行的时候再执行resolve
 * 就这样,用回调的方式实现了异步 所以说[调用时机很重要]
 * 
 */
class MyPromise {
  state = 'pending' // pending fulfilled rejected
  value = undefined // 成功的值
  reason = undefined // 失败的原因
  resolveCallbacks = [] //如果是pending调用then,把实例传入的resolve函数保存起来
  rejectCallbacks = [] //如果是pending调用then,把实例传入的reject函数保存起来

  // new 的时候调用,接收一个函数
  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.resolveCallbacks.forEach(fn => {
          fn(value)
        })
      }
    }
    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach(fn => {
          fn(reason)
        })
      }
    }
    //包一下,防止报错,是个很好的习惯
    try {
      fn(resolveHandler, rejectHandler)
    } catch (e) {
      reject(e)
    }
  }
  /**
   * 
   * @param {*} resolve 成功回调函数
   * @param {*} reject 失败回调函数
   */
  then(fn1, fn2) {
    //我们知道then执行的时候会返回一个[新的Promise],就相当于又走了一遍constructor

    fn1 = typeof fn1 === 'function' ? fn1 : v => v;
    fn2 = typeof fn2 === 'function' ? fn2 : r => r

    // 状态流转 
    // 如果pending
    if (this.state === 'pending') {
      return new MyPromise((resolve, reject) => {
        /**
         * 把函数放入resolveCallbacks中,等p1的状态变为fulfilled,
         * 也就是p1的构造函数执行resolve的时候执行
         */
        // 
        this.resolveCallbacks.push(() => {
          try {
            let newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })
        console.log(this.resolveCallbacks)
        this.rejectCallbacks.push(() => {
          try {
            let newReason = fn2(this.reason)
            reject(newReason)
          } catch (err) {
            reject(err)
          }
        })
      })
    }
    // 如果成功,执行resolve
    if (this.state === 'fulfilled') {
      return new MyPromise((resolve, reject) => {
        try {
          let newValue = fn1(this.value)
          resolve(newValue)
        } catch (err) {
          reject(err)
        }
      })
    }
    // 如果失败,执行reject
    if (this.state === 'rejected') {
      // 这是不支持链式调用的,在fn2执行的时候把reason传进去
      // fn2(this.reason)

      /**
       * 那么怎么支持链式调用呢? 
       * 要是想不明白,可以分开写:
       * 看测试结果代码,我们定义了p2接收p1.then()的返回值 如果p2要想能用then
       * 那p2也要是MyPromise的实例,所以我们返回一个新的MyPromise
       * 这样p2也能使用then了
       * 
       * 那这样的话,p2又要走一遍constructor,参数也是一样的
       * 然后p2.then res函数的参数接收的是 p1.then res函数的返回结果
       * 而我们知道p2then的调用 要在p2的构造函数的Promise中调用resolve
       * 所以也就是下面的这个构造函数
       */
      return new MyPromise((resolve, reject) => {
        // 在这里实现p2的构造函数
        // debugger
        try {
          // 这里,fn2要把参数reason传入,给p1.then 的reason使用
          // 同时fn2还有返回值 给p2.then 的 res使用
          let newReason = fn2(this.reason)
          reject(newReason)
        } catch (err) {
          reject(err)
        }
      })
    }
  }
  // 相当于then的语法糖,区别就是只接收一个函数作为参数
  catch(fn) {
    return this.then(null, fn)
  }

  race() { }
}
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => resolve(value))
}
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}
MyPromise.all = function (promiseList = []) {
  return new MyPromise((resolve, reject) => {
    /**
     * 注意这行不能写到forEach里面,因为循环是同步的,很快就会执行完
     * promiseLength很快就会等于promiseList.length
     * 但是这时候可能p还处于pending状态
     */
    let promiseLength = 0
    /**
     * 用于保存结果
     */
    let result = []
    promiseList.forEach(p => {
      p.then(res => {
        result.push(res)
        promiseLength++
        if (promiseLength === promiseList.length) {
          // 结果都返回了,才resolve
          resolve(result)
        }
      }).catch(e => {
        reject(e)
      })
    })
  })
}
MyPromise.race = function (promiseList = []) {
  return new MyPromise((resolve, reject) => {
    let isResolve = false
    promiseList.forEach(p => {
      p.then(res => {
        if (!isResolve) {
          resolve(res)
          isResolve = true
        }
      }).catch(e => {
        reject(e)
      })
    })
  })
}


//测试结果
const p1 = new MyPromise((resolve, reject) => {
  // resolve(100)
  // reject('error')
  setTimeout(function () {
    console.log('timeout')
    resolve(100)
  }, 2000)
})

// then会接受两个函数,成功回调 失败回调
let p2 = p1.then(res1 => {
  console.log('res1', res1)
  return 200
}, reason => {
  console.log('reason1', reason)
  throw new Error('e')
  return reason
})
// console.log('p2===')
// console.log(p2)

let p3 = p2.then(res2 => {
  console.log('res2', res2)
  return 300
}, reason2 => {
  console.log('reason2', reason2)
})

p3.then(res3 => {
  console.log('res3', res3)
}, reason3 => {
  console.log('reason3', reason3)
})

//测试其他方法==================
//测试MyPromise.resolve
const testResolve = MyPromise.resolve(200).then(res => {
  console.log('testResolve', res)
})
//测试MyPromise.reject
const testReject = MyPromise.reject('new err').catch(reason => {
  console.log('testReject', reason)
})

//测试MyPromise.all和MyPromise.race
const pt1 = new MyPromise((resolve, reject) => {
  // resolve(100)
  // reject('error')
  setTimeout(function () {
    resolve('pt1')
  }, 2000)
})
const pt2 = MyPromise.resolve(200)
const pt3 = MyPromise.reject('pt3 error')
const pt4 = new MyPromise((resolve, reject) => {
  setTimeout(function () {
    resolve('pt4')
  }, 1000)
})
const testPromiseAll = MyPromise.all([pt1, pt2, pt4]).then(result => {
  console.log('testPromiseAll', result)
})
const testPromiseRace = MyPromise.race([pt1, pt4]).then(result => {
  console.log('testPromiseRace', result)
})