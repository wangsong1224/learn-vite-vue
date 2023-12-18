/**
 * 宏任务和微任务是什么?
 * 宏任务是浏览器任务,微任务是JS引擎的任务
 * 宏任务包括:
 * 1.JavaScript脚本执行事件
 * 2.setTimeout setInterval 
 * 3.网络请求完成,文件读写完成事件
 * 4.渲染事件(如解析DOM,计算布局,绘制等等)
 * 5.用户交互事件(如鼠标点击,滚动页面,页面缩放等等)
 * requestAnimationFrame(这个不说了,了解就行)
 * 
 * 微任务包括:
 * 1.Promise async/await
 * 2.Mutation Observer :
 * 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。
 * 3.queueMicrotask() :
 * Window 或 Worker 接口的 queueMicrotask() 方法，将微任务加入队列以在控制返回浏览器的事件循环之前的安全时间执行。
 * 微任务对于需要执行最后阶段的任务或其他在渲染之前的任务的库和框架特别有用。
 * 3.process.nextTick：Node独有
 * 
 * 为什么会有微任务?
 * 是为了兼顾效率和实时性
 * 比较典型的场景是监控DOM节点的变化(添加删除等等),然后根据变化处理业务逻辑.
 * 
 * 
 * 宏任务和微任务的关系?
 * 1.微任务和宏任务是绑定的,每个宏任务执行时会创建自己的微任务队列
 * 2.当前宏任务结束之前会执行里面的微任务,然后再执行下一个宏任务
 * 3.在一个宏任务中创建一个宏任务和微任务,微任务的执行会早于宏任务
 */

/**
 * event loop 和DOM渲染的关系?DOM渲染的时机?
 * 浏览器的渲染进程里的主线程会执行DOM渲染和JS任务,
 * 
 */

/**
 * 宏任务,微任务和DOM渲染的关系?执行顺序
 * 微任务:DOM渲染前触发
 * 宏任务:DOM渲染后触发
 * DOM渲染任务优先级比较高,需要插队
 */
// 代码演示
let dom1 = document.createElement('div')
dom1.innerText = 'div'
dom1.setAttribute('id', 'div1')
document.body.appendChild(dom1)

Promise.resolve().then(res => {
  let dom = document.querySelector('#div1')
  // alert('DOM渲染了么,promise')
  console.log(dom)
})
setTimeout(function () {
  // alert('DOM渲染了么,settimeout')
  let dom = document.querySelector('#div1')
  console.log(dom)
})

/**
 * 微任务套微任务
 */
console.log("start");
new Promise((resolve, reject) => {
  resolve(1);
  // 这个微任务先进入微任务队列
  new Promise((resolve, reject) => {
    resolve(2);
  }).then((res) => {
    console.log(res);
  });
}).then((res) => {
  console.log(res);
});

console.log("end");
// start end 2 1