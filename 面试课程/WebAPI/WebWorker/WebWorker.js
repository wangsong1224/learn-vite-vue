/**
 * Web Workers 分类及 5 个使用场景:
 * https://github.com/Troland/how-javascript-works/blob/master/worker.md
 * 梳理 Web Worker 及实战场景:
 * https://juejin.cn/post/7176788060619669565
 * 
 * HTML5 提供并规范了 Web Worker 这样一套 API，
 * 它允许一段 JavaScript 程序运行在主线程之外的另外一个线程（Worker 线程）中。
 * 
 * Web Workers 是浏览器内置的线程所以可以被用来执行非阻塞事件循环的 JavaScript 代码。
 * 
 * Service Workers:
 * Service Worker 是一个由事件驱动的 worker，它由源和路径组成。
 * 它可以控制其关联的网页，拦截及修改导航，资源的请求，
 * 以及一种非常细粒度的方式来缓存资源以让你非常灵活地控制程序在某些情况下的行为（
 * 比如网络不可用）。
 * Service worker 本质上充当 Web 应用程序、浏览器与网络（可用时）之间的代理服务器。
 * 这个 API 旨在创建有效的离线体验，
 * 它会拦截网络请求并根据网络是否可用来采取适当的动作、更新来自服务器的的资源。
 * 它还提供入口以推送通知和访问后台同步 API。
 */

