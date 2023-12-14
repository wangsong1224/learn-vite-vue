/**
 * 面试题
 * 1.同步和异步的区别是什么?
 * 同步就是任务顺序执行，执行完一个再执行下一个
 * 异步指的是不用等待任务执行完成,而是继续执行其他的任务,然后用回调通知
 * 
 * 2.手写Promise加载一张图片.
 * 
 * 3.前端使用异步的场景有哪些?
 * 1.网络请求,比如Ajax,图片加载
 * 2.定时任务
 * 3.文件读取:FileReader是异步的,FileReaderSync 接口提供了同步版本，但仅在 web worker 中可用。
 * 
 * 4.JS为什么是异步的?
 * 因为JS是单线程语言,它不能启动多线程并行处理任务,因此同一时间只能处理一个任务,所有任务都要排队,
 * 一个任务处理完才能处理下个任务.
 * 但是,如果前一个任务处理时间很长,[比如文件读取或者Ajax请求],
 * 后一个任务必须等待,这就会造成页面的卡顿,严重影响用户体验
 * 因此JS设计成了异步,就是说碰到这种高耗时的操作,先放到任务队列中,继续执行下个任务
 * 然后等到这个任务有结果后,在用回调的方式通知JS执行任务
 * 就这样,用异步回调 + eventloop的方式解决了卡顿的问题
 * 
 * 6.然后JS是怎么解决异步问题的?
 * 用event-loop
 * 
 * 5.为什么JS是单线程的?
 * JS作为浏览器的脚本语言,[主要用来实现和用户的交互],比如操作DOM 
 * [如果JS是多线程,]一个线程在一个DOM节点增加内容,另一个线程要删除这个DOM节点,那这个DOM到底是增加还是删除呢?
 * 所以多线程并发会带来很多[线程间同步的问题],使代码变得很复杂.
 * 所以在设计之初的时候,设计成了单线程来简化开发人员的工作,避免了[并发问题]
 * 
 *  
 */

/**
 * 知识点:
 * 单线程和异步
 */

/**
 * 文件读取 可以试试
 */
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files;
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      output.innerText = reader.result;
    });
    reader.readAsText(file);
  }
});

/**
 * 手写Promise加载一张图片.
 * 代码演示
 */
//图片加载函数
const loadImg = function (url) {
  return new Promise((resolve, reject) => {
    let div = document.createElement('div')
    div.style.height = '100px'
    let img = document.createElement('img')
    img.src = url
    div.appendChild(img)
    document.body.appendChild(div)
    //图片加载是异步的,这个表示图片加载完成事件 
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject(new Error(`图片加载失败 ${url}`))
    }
  })
}
const url1 = 'https://p3-passport.byteacctimg.com/img/user-avatar/bd208cb7c2fc878ad43001657939800f~100x100.awebp'
const url2 = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'
/**
 * promise最基本的应用,链式调用
 * 只要有返回值,就能继续用.then接收返回值
 */
loadImg(url1).then(img1 => {
  console.log(img1.width)
  return img1
}).then(img1 => {
  console.log(img1.width)
  return loadImg(url2)
}).then(img2 => {
  console.log(img2.width)
  return img2
}).then(img2 => {
  console.log(img2.width)
}).catch(e => {
  console.error(e)
})

// setTimeout笔试题 输出:1 3 5 4 2
console.log(1)
setTimeout(function () {
  console.log(2)
}, 1000)
console.log(3)
setTimeout(function () {
  console.log(4)
}, 0)
console.log(5)