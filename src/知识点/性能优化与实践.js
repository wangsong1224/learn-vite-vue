/**
 * 性能优化原则
 * 1.多使用内存,缓存
 * 2.减少CPU,GPU的计算
 * 
 * 优化方向
 * 1.减少页面体积,减少请求数量
 * 2.优化页面渲染
 * 
 * 减少体积
 * 1.静态资源合并压缩(JS代码压缩,CSS代码压缩合并,小图用base64)
 * 2.静态资源缓存
 * 资源名称加hash HTTP缓存:强缓存和协商缓存  浏览器缓存:SW,WebStorage,Preload,Prefetch
 * 当你更新了你的代码并重新构建时，如果你的文件名没有变化，
 * 那么浏览器就会从缓存中读取旧的文件，这样就会导致代码更新不及时，从而影响网站的正确性和稳定性。
 * 3.使用CDN让资源加载更快
 * 
 * 优化页面渲染
 * 1.CSS放前面,JS放后面
 * 2.懒加载(图片懒加载,下拉加载更多)
 * 3.减少DOM查询,对DOM查询做缓存
 * 4.减少DOM操作,多个操作尽量合在一起执行(DocumentFragment)
 * var frag = document.createDocumentFragment();
 * for(x = 0; x < 10; x++) {
 * li = document.createElement("li");
 * li.innerHTML = "List item " + x;
 * frag.appendChild(li);  // 先放在 frag 中，最后一次性插入到 DOM 结构中。
 * }
 * listNode.appendChild(frag);
 * 
 * 5.事件节流
 * 6.尽早执行操作(DOMContentLoaded)
 * 7.使用 SSR 后端渲染，数据直接输出到 HTML 中，减少浏览器使用 JS 模板渲染页面 HTML 的时间
 * 
 * 
 * 数据优化应该怎么做
 * 1.建立性能数据收集平台，摸底当前性能数据，通过性能打点，将上述整个页面打开过程消耗时间记录下来
 * 2.分析耗时较长时间段原因，寻找优化点，确定优化目标
 * 3.开始优化
 * 4.通过数据收集平台记录优化效果
 * 5.不断调整优化点和预期目标，循环2~4步骤
 */

/**
 * 常见的Web安全
 * 1.XSS(Cross Site Scripting) 跨站脚本攻击
 * 举一个例子，我在一个博客网站正常发表一篇文章，输入汉字、英文和图片，完全没有问题。
 * 但是如果我写的是恶意的 JS 脚本，例如获取到document.cookie然后传输到自己的服务器上，
 * 那我这篇博客的每一次浏览都会执行这个脚本，都会把访客 cookie 中的信息偷偷传递到我的服务器上来。
 * 
 * 危害:
 * XSS 的危害相当大，如果页面可以随意执行别人不安全的 JS 代码，
 * 轻则会让页面错乱、功能缺失，重则会造成用户的[信息泄露]。
 * 利用获取 cookie 的方式，将 cookie 传入入侵者的服务器上，
 * 入侵者就可以模拟 cookie 登录网站，对用户的信息进行[篡改]。
 * 
 * 预防:
 * 最根本的方式,是对用户输入的内容进行验证和替换,需要替换的字符有:
 * & 替换为：&amp;
 * < 替换为：&lt;
 * > 替换为：&gt;
 * ” 替换为：&quot;
 * ‘ 替换为：&#x27;
 * / 替换为：&#x2f;
 *  function escape(str) {
      str = str.replace(/&/g, '&amp;')
      str = str.replace(/</g, '&lt;')
      str = str.replace(/>/g, '&gt;')
      str = str.replace(/"/g, '&quto;')
      str = str.replace(/'/g, '&#39;')
      str = str.replace(/`/g, '&#96;')
      str = str.replace(/\//g, '&#x2F;')
      return str
    }
    React默认帮忙做了,所有内容渲染之前都进行了转义

 * 2.CSRF(Cross-site request forgery) 跨站请求伪造
  例如，一个支付类网站，给他人转账的接口是http://buy.com/pay?touid=999&money=100，
  而这个接口在使用时没有任何密码或者 token 的验证，
  只要打开访问就直接给他人转账。一个用户已经登录了http://buy.com，
  在选择商品时，突然收到一封邮件，而这封邮件正文有这么一行代码
  <img src="http://buy.com/pay?touid=999&money=100"/>，
  他访问了邮件之后，其实就已经完成了购买。
 * CSRF 是[借用了当前操作者的权限]来偷偷地完成某个操作，而不是拿到用户的信息。
 * 预防 CSRF 就是加入各个层级的权限验证，例如现在的购物网站，只要涉及现金交易，
 * 肯定要输入密码或者指纹才行。
 * 
 */