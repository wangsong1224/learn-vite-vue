/**
 * 面试题:
 * 1.手写一个简易的Ajax
 * 2.跨域问题,解决方案
 */
/**
 * 知识点:
 * XMLHttpRequest
 * 状态码
 * 跨域:同源策略,跨域解决方案
 * 
 */

/**
 * XMLHttpRequest
 * 通过XHR可以在不刷新页面的情况下请求特定的URL,获取数据.在Ajax编程中被大量使用
 * 
 * AJAX(Asynchronous JavaScript And XML)
 * 是一种使用 XMLHttpRequest 技术构建更复杂，动态的网页的编程实践。
 * [AJAX 正在逐渐被 JavaScript 框架中的函数和官方的 Fetch API 标准取代。]
 * 
 */

function ajax(url) {
  return new Promise((resolve, reject) => {
    //1.创建一个XHR对象,也是个构造函数
    const xhr = new XMLHttpRequest();
    //2.创建连接
    xhr.open('GET', url)
    //3.发送请求 参数 body 表示将通过该请求发送的数据，如果不传递信息，可以设置为 null 或者省略。
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let res = xhr.responseText
          resolve(res)
        } else if (xhr.status === 404) {
          reject('404 not found')
        } else {
          reject('未知错误')
        }
      }
    }
  })
}
ajax('./data.json').then(res => {
  console.log('返回值')
  console.log(res)
}).catch(e => {
  console.error(e)
})



/**
 * 跨域问题
 * 
 * 
 * 
 */