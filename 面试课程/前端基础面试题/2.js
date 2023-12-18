/**
 * 函数call和apply的区别是什么
 * 
 * 传参方式不同
 * call接收多个参数
 * apply接收数组或类数组,类数组比如arguments
 */

/**
 * 事件代理(委托)是什么?
 * 利用[事件冒泡的特性]，将本应该绑定在多个元素上的事件
 * 绑定在他们的[祖先元素]上，实现处理程序对多个子孙级元素的某类型[事件管理]
 */

/**
 * 闭包是什么,有什么特性,有什么负面影响?
 * 
 */

/**
 * document load和ready的区别?
 * load是onLoad事件,是页面加载完成触发, load 事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发
 * ready是DOMContentLoaded,DOM解析完成 且所有延迟脚本（<script defer src="…"> 和 <script type="module">）
 * 下载和执行完毕后，会触发 DOMContentLoaded 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。
 */

/**
 * 如何减少DOM操作?
 * 缓存DOM查询结果,
 * 多次变更一次插入,用fragment
 */

/**
 * 解释jsonp的原理,为何它不是真正的AJAX?
 * 
 * jsonp利用Script标签不受同源策略的影响,
 * 后端返回一个回调函数并执行,数据放在回调函数的参数里面,这样就能拿到数据
 * 
 * 比如
 * 前端代码:
 * <script>
 *  window.cb=function(data){
 *    console.log(data)
 * }
 * </script>
 * <script src='http://...jsonp.js?name=xxx&callback=cb'></script>
 * 
 * jsonp.js返回后相当于,执行了前端定义好的回调函数,并且数据当做参数
 * <script>
  * cb(
  *  {name:xxx}
  * )
 * </script>
 * 
 */

/**
 * ==和===的区别?
 * ==会做隐式类型转换,判断值相等
 * ===会判断值和类型都相等
 * 
 */

/**
 * 函数声明和函数表达式的区别?
 */