/**
 * 面试题
 * 1.从输入URL到渲染出页面的整个过程
 * 2.window.onload 和DOMContentLoaded的区别
 */
/**
 * 知识点:
 * 1.加载资源的形式:
 * HTML代码 JS CSS 媒体文件(图片,视频)
 * 
 * 2.加载资源的过程:
 * DNS解析:根据域名找到IP地址
 * 浏览器根据IP地址向服务器发起HTTP请求
 * 服务器处理HTTP请求返回结果给浏览器
 * 
 * 3.渲染页面的过程:
 * 根据HTML代码生成DOM Tree
 * 根据CSS代码生成CSSOM
 * DOM Tree 和 CSSOM整合形成Render Tree
 * 根据Render Tree渲染页面
 * 遇到scrip则暂停渲染,优先加载并执行JS代码,完成再继续
 * 直至把Render Tree渲染完成
 */