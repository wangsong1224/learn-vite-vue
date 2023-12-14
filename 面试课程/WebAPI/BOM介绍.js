/**
 * BOM
 */
//如何识别浏览器类型?
//分解拆解url各个部分
//常用的navigator screen location history
console.log('BOM介绍=======')


console.log(screen.width)
console.log(screen.height)

// location
console.log(location)
//当前页面[完整的URL],如果被改变 会导航到另外一个页面
console.log(location.href)
//当前url所使用的[协议]
console.log(location.protocol)
console.log(location.host)  // "http:" 'https'
// 返回url的端口信息
console.log(location.port)  // '8888'
// 返回url的路径字符串
console.log(location.pathname) // /%E9%9D%A2%E8%AF%95%E8%AF%BE%E7%A8%8B/WebAPI/%E6%BC%94%E7%A4%BA.html
// 又名查询字符串，返回url中?以及之后的字符串
console.log(location.search) // ?token=abc&page=1
// 返回url中代表页面某个区域的带有#的字符串。哈希值 vue-router中的哈希模式就是用这个。
console.log(location.hash) // "#test/most"

setTimeout(() => {
  // 参数为true,强制从服务器重新获取，为false时从缓存中读取。默认值为false
  // location.reload(true)

  // 用 replace() 方法后，当前页面不会保存到会话历史中（session History），
  // 这样，用户点击回退按钮时，将不会再跳转到该页面。
  // location.replace('https://www.baidu.com');
}, 5000);

/**
 * History对象允许您访问用户浏览器的历史记录。它提供了以下几个主要方法和属性：
 * back(): 回退到历史记录中的上一页。
 * forward(): 前进到历史记录中的下一页。
 * go(): 前进或后退指定数量的页面。
 * length: 历史记录中的页面数量。
 * state: 表示当前历史记录项的状态。
 */
// //后退一页
// history.go(-1)
// //前进一页
// history.go(1);
// //前进两页
// history.go(2);
// // back()方法用于模仿浏览器的后退按钮，相当于history.go(-1)
// history.back()
// // forward()方法用于模仿浏览器的前进按钮，相当于history.go(1)
// history.forward()

window.moveTo(100, 100);

//一般简称ua
const ua = navigator.userAgent;
console.log(ua)
// 位置信息
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log('位置信息')
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`您的纬度是：${latitude}，经度是：${longitude}`);
  })
}
// BOM允许您使用window.open方法在浏览器中打开新的弹出窗口。
// 因为配置了第三个参数,所以是打开新窗口
// const newWindow = window.open('https://www.example.com', '_blank', 'width=400,height=300');
// 这里就是打开新的标签页
// window.open('', '_blank')