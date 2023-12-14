/**
 * 1.三种状态
 * 2.状态的表现和变化
 * 3.then和catch对状态的影响
 * resolved执行then
 * reject执行catch
 * 一旦状态发生了改变,就不会再变了
 */

/**
 * 三种状态
 * pending(进行中),fulfilled(已成功),rejected(已失败)
 * 只有异步操作的结果可以改变这个状态,任何其他操作都不能改变这个状态
 * 一旦状态改变,就不会再改变,任何时候都可以得到这个结果
 * 状态的改变只能有两种:
 * 1.pending->fulfilled
 * 2.pending->rejected
 * 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，
 * 这时就称为 resolved（已定型）
 * 如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果
 *
 *
 * Promise也有一些缺点:
 * 1.无法取消Promise，一旦新建它就会立即执行，无法中途取消。
 * 2.如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
 * 3.当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
 *
 * 注意:.then() 和 .catch()都会返回一个新的Promise对象
 * 所以then和catch可以连写,不断连写
 */

//基本用法不写了,看看其他用法
/**
 * 如果我们想直接获取一个resolved状态,可以用下面的写法
 */
// let data1 = Promise.resolve('data1')
// //等价于
// // new Promise(resolve=>resolve('foo'))
// // 然后我们可以直接使用then来得到结果
// data1.then(data1 => {
//   console.log('data1', data1)
//   return 'new data1'
// }).catch(e => {
//   console.error(e)
// }).then(res => {
//   console.log('new data1', res)
// })

// let data2 = Promise.reject('data2')
// //等价于
// // new Promise(resolve,reject=>reject('foo')) 
// // 然后我们可以直接使用then来得到结果
// data2.then(data2 => {
//   // 根本不会走这里,因为reject之后会被catch捕获
//   console.log('data2', data2)
//   return data2
// }).catch(e => {
//   // 第一步是走到这里,然后catch里面没有报错,返回resolved状态,被下个一then调用
//   // 然后这里还有返回值,所以在下一个then中可以拿到返回值
//   console.error(e)
//   return e
// }).then(res => {
//   // 第二步走到这里
//   console.log('new data2', res)
// })
// console.log('abc')


/**
 * 面试题:打印出什么
 * 1.resolved状态被then调用  rejected状态被catch捕获
 * 2.then 和 catch正常返回resolved,如果里面有报错则返回rejected
 *
 */
// 1 3
// Promise.resolve().then(() => {
//   //第一步resolved,被then接收,then里面没有报错 返回一个resolved状态的Promise
//   //会被链上的下一个then接收
//   console.log(1)
// }).catch(() => {
//   console.log(2)
// }).then(() => {
//   //所以第二步到这里
//   console.log(3)
//   console.log('第一题 end')
// })

/**
 * 这种写法有什么用呢? 举个例子比如Promise.resolve这是个Ajax返回给你的结果
 * 你要对结果做处理吧,比如你在第一个then里面做了初步的处理
 * 为了防止第一步有报错,可以catch一下,然后呢 又返回了resolved状态的Promise
 * 到了第二个then的时候,你可以继续处理数据
 *
 * 当然了catch完全也可以写到最后,反正就是不管哪里有报错,都会被链上最近的下一个catch捕获
 */
// let resData = {
//   code: '10010',
//   data: {
//     name: 'abc',
//     age: 18
//   }
// }
// Promise.resolve(resData).then((resData) => {
//   //第一步resolved,到这里 
//   //这里可能有报错,如果报错返回rejected状态的Promise,会被下个catch接收
//   //如果不报错,会被下一个then接收
//   console.log(1)
//   let data = resData?.data
//   if (data) {
//     return data
//   } else {
//     throw new Error('new Error')
//   }
// }).catch((e) => {
//   console.error(e)
//   //第二步有可能到这里 里面没有报错,返回resolved状态的Promise,被下个then接收
//   console.log(2)
//   return e
// }).then((data) => {
//   //第二步有可能到这里
//   console.log(data)
//   console.log(3)
//   console.log('第二题 end')
// }).finally(() => {
//   /**
//    * finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
//    * 还可以写很多个,都会执行
//    * finally方法的回调函数不接受任何参数，这意味着没有办法知道，
//    * 前面的 Promise 状态到底是fulfilled还是rejected。
//    * 这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
//    */
//   console.log('finally1')
// }).finally(() => {
//   console.log('finally2')
// }).then(() => {
//   // 这个居然也能执行?
//   console.log('finally后面的then')
// })

// 2 4
// Promise.reject().then(() => {
//   //这里根本不会执行
//   console.log(1)
//   throw new Error('error1')
// }).catch(() => {
//   //第一步到这里 Promise.reject返回rejected,被catch接收
//   //catch本身没有报错,返回resolved状态Promise,被下一个then接收
//   console.log(2)
// }).catch(() => {
//   console.log(3)
// }).then(() => {
//   console.log(4)
//   console.log('第三题 end')
// })





