/**
 * 面试题
 * 1.编写一个通用的时间监听函数?
 * 2.描述事件冒泡的流程?
 * 3.无限下拉的图片列表,如何监听每个图片的点击?
 */
/**
 * 知识点:
 * 事件绑定:
 * 事件冒泡:
 * 事件代理:
 */
// 事件绑定
const div1 = document.querySelector('#div1')
function bindEvent(eventName, element, fn) {
  /**
   * 要绑定的元素.addEventListener(事件名称, 事件处理函数, false:默认冒泡 true为捕获)
   * 事件默认使用冒泡的方式传播
   */
  element.addEventListener(eventName, fn, false)
}
bindEvent('click', div1, e => {
  /**
   * e :事件对象
   */
  console.log('点击事件====')
  console.log(e.target)
  e.preventDefault()
})

/**
 * 事件冒泡:
 * 事件冒泡就是一个元素触发了某个事件,事件会向上传播直到达到最外层的document
 * 沿途绑定的所有事件处理函数都会被触发
 */
/**
 * 演示,点击激活,打印激活 点击取消打印取消
 */
const activeP = document.querySelector('.dd1>p:nth-child(1)')
activeP.addEventListener('click', e => {
  /**
   * 阻止事件冒泡: e.stopPropagation()
   * 阻止默认行为: e.preventDefault()
   * 
   * preventDefault() 方法不会阻止事件冒泡和事件捕获。
   * stopPropagation() 方法不会阻止默认行为
   * 注意:这两个没什么关系,别搞混了!!
   * 
   * preventDefault用来干什么呢?
   * 如链接<a>，提交按钮<input type=”submit”>等
   * preventDefault可以阻止a标签的跳转,也可以阻止提交表单
   */
  console.log('activeP click')
  e.stopPropagation()
  console.log('激活')
})

const fatherDiv = document.querySelector('.dd')
fatherDiv.addEventListener('click', e => {
  console.log('fatherDiv click')
  console.log('取消')
})

const body = document.querySelector('body')
body.addEventListener('click', e => {
  // e.target 是触发事件的对象  说白了比如fatherDiv触发了,就显示fatherDiv
  // console.log(e.target)
  console.log('body click')
  console.log('取消')
})

/**
 * 事件代理:是基于事件冒泡的原理实现的,就是把事件绑定到父元素上,让父元素统一处理事件
 * 好处:
 * 1.代码简洁
 * 2.减少浏览器内存占用
 * 3.但是不要滥用,比如瀑布流这种场景就比较合适
 */
//演示:点击加载更多,创建更多标签 我们不知道会有多少a标签,所以点击事件绑定到父元素
const btn = document.querySelector('.btn')
let fa = document.querySelector('.dd5')
let count = 3
btn.addEventListener('click', e => {
  e.stopPropagation()
  let fragment = document.createDocumentFragment()
  for (let i = count + 1; i <= count + 3; i++) {
    let div = document.createElement('div')
    let a = document.createElement('a')
    a.href = 'https://www.baidu.com/'
    a.innerText = `链接${i}`
    div.appendChild(a)
    fragment.appendChild(div)
  }
  count += 3
  fa.appendChild(fragment)
})
fa.addEventListener('click', e => {
  // 阻止a标签默认行为,本例中阻止跳转百度
  e.preventDefault()
  console.log(e.target.nodeName)
  if (e.target.tagName === 'A') {
    alert(`点击了 ${e.target.innerText}`)
  }
})
