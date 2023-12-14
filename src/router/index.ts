/**
 * 路由机制一般有两种
 * hash模式 通过#后面的内容做区分
 * history模式 看起来跟正常url没啥区别
 * 
 * 单页应用在用户交互,页面跳转上都是无需刷新的,这极大地提高了用户访问的体验
 * hash路由:hash值的变化时不会导致浏览器页面刷新,而是触发hashChange事件,
 * 可以通过对hashChange事件的监听,实现动态页面切换
 * 
 * 注意事件名小写,这是原生方法
 * window.adEventLisentener('hashchange',fn)
 * 
 * history模式:浏览器多了两个事件,pushState和replaceState
 * 通过这两个API我们可以改变URL的地址,并且浏览器不会向后端发起请求
 * 
 * 我在这里还可以分享一个我喜欢用的前端面试题，题目来自贺老的面试题。
 * 那就是我会把电脑给面试者，让他在 Console 页面里写代码，
 * 统计极客时间官网一共有多少种 HTML 标签。
 * new Set([...document.querySelector('*')].map(n=>n.nodeName)).size
 * 
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Test from "../pages/Test.vue";
import CSS from "../pages/前端面试课程/CSS学习.vue";
import JS from "../pages/前端面试课程/JS学习.vue";
import TestElement2AndVue3 from "../pages/TestElement2AndVue3.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/test", name: "Test", component: Test },
  { path: "/test2", name: "TestElement2AndVue3", component: TestElement2AndVue3 },
  { path: "/CSS", name: "CSS", component: CSS },
  { path: "/JS", name: "JS", component: JS },
];
const router = createRouter({ history: createWebHashHistory(), routes });
export default router;