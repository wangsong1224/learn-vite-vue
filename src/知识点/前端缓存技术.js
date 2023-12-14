/**
 * 缓存的合理性直接影响网页性能
 * 前端开发离不开浏览器和网络
 * 所以前端缓存分为两类
 * 1.HTTP缓存 
 * 是一种通信缓存,利用这一缓存可以提高服务器的资源利用率 在有效时间内不必重复向服务器发起
 * 重复的资源请求,大大减少服务期的压力
 * 2.浏览器缓存
 * 是浏览器提供的缓存机制,可以将访问产生的临时数据缓存到内存或本地,提升用户端的加载速度
 * 
 * HTTP请求{
 * request :请求行 请求头 请求正文
 * response:状态行 响应头 响应正文
 * }
 * 
 * 这里我们看,和缓存有关的是请求头和响应头 Request Headers 和 Response Headers部分
 * 1.强缓存 
 * Expires 过期时间:其给出了缓存过期的[绝对时间]，即在此时间之后，响应资源过期，属于实体首部字段。
 * 
 * Cache-Control 缓存控制
 * 其用于控制缓存的行为，可以组合使用多种指令，多个指令之间可以通过 “,” 分隔，属于通用首部字段。
 * 常用的指令有：max-age、s-maxage、public/private、no-cache/no store 等。
 * 例如:
 * Cache-Control: max-age:3600, s-maxage=3600, public
 * Cache-Control: no-cache
 * max-age 指令给出了缓存过期的[相对时间]，单位为秒数。
 * 当其与 Expires 同时出现时，max-age 的优先级更高。
 * 
 * s-maxage 与 max-age 不同之处在于，其只适用于公共缓存服务器，
 * 比如资源从源服务器发出后又被[中间的代理服务器]接收并[缓存]。
 * 
 * public 表示该资源可以被任何节点缓存(包括客户端和代理服务器)
 * private 表示该资源只能提供给客户端缓存,代理服务器不能缓存
 * 
 * no-cache 在请求首部中被使用时，表示告知（代理）服务器不直接使用缓存，
 * 要求向源服务器发起请求，而当在响应首部中被返回时，表示客户端可以缓存资源，
 * 但每次使用缓存资源前都必须先向服务器确认其有效性，这对每次访问都需要确认身份的应用来说很有用
 * 当然,也可以在meta标签中设置
 * <meta http-equiv="Cache-Control" content="no-cache" />
 * 
 * 2.协商缓存
 * Last-Modified 首部字段顾名思义，代表资源的最后修改时间
 * 浏览器第一次访问接收到服务器资源返回的Last-Modified之后,会把这个值存起来
 * 并在下次访问的时候携带If-Modified-Since发送给服务端验证
 * 示例(说白了这就是个赋值的过程)
 * Last-Modified: Fri , 14 May 2021 17:23:13 GMT
 * If-Modified-Since: Fri , 14 May 2021 17:23:13 GMT
 * 
 * 再次请求时,如果在If-Modified-Since指定的时间之后 发生了更新,会将新资源返回并更新Last-Modified
 * 然后浏览器更新f-Modified-Since
 * 如果没有发生更新,服务器会返回304 Not Modified的响应
 * 
 * ETag与If-None-Match
 * ETag表示资源的唯一标识,服务器会按照指定规则生成资源标识
 * 资源发生变化,ETag也会更新
 * 同样的，当浏览器第一次接收到服务器返回资源的 Etag 值后，其会把这个值存储起来，
 * 并在下次访问该资源时通过携带 If-None-Match 请求首部发送给服务器验证该资源有没有过期。
 * Etag: "29322-09SpAhH3nXWd8KIVqB10hSSz66"
 * If-None-Match: "29322-09SpAhH3nXWd8KIVqB10hSSz66"
 * 
 * 缓存新鲜度=max-age||(expires - date)
 * Date表示服务端创建报文的时间,可以理解为服务器返回新资源的时间
 * 
 * 
 * 
 */

/**
 * 协商缓存
 * 协商缓存可以看作是强制缓存失效后，
 * 浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。
 * 浏览器启用协商缓存的前提是强缓存失效
 * 
 * 两者对比:
 * ETag优先级比Last-Modified 更高
 * Last-Modified只能精确到秒，秒之内的内容更新Etag才能检测
 * 文件有时会定时重新生成相同内容，Last-Modified不能很好辨别
 * etag每次服务端生成都需要进行读写操作，而last-modified只需要读取操作，etag的消耗是更大的
 * 生成值的方法不同： Etag的值通常为文件内容的哈希值；而Last-Modified为最后修改的时间。
 * 
 * 
 */

/**
 * 前端应用中的HTTP缓存方案
 * 
 * SPA:应用由一个HTML文件组成,页面之间的跳转通过异步加载JS等资源文件的形式进行渲染,
 * 当我们访问首页时，浏览器率先加载的便是 HTML 文件，
 * 后续继续加载一些首页渲染需要以及公共的资源文件，当我们跳转页面时会异步加载下一个页面所需的资源，
 * 实现页面的组装及逻辑处理。
 * 
 * 
 */

/**
 * Nginx与跨域的问题
 * 
 * Access-Control-Allow-Origin:表示指定允许访问的域名(白名单)
 * 
 * 同源策略:
 * 浏览器最核心最基本的安全功能,如果缺少了同源策略,容易受到XSS,CSRF等攻击
 * 协议,域名,端口 三者相同
 * 
 * 同源策略允许的操作
 * 1.使用 <script src="…"></script> 标签嵌入的 JavaScript 脚本。语法错误信息只能被同源脚本中捕捉到。
 * 2.使用 <link rel="stylesheet" href="…"> 标签嵌入的 CSS。
 * 3.通过 <img> 展示的图片。
 * 4.通过 <video> 和 <audio> 播放的多媒体资源。
 * 5.通过 <object> 和 <embed> 嵌入的插件。
 * 6.通过 @font-face 引入的字体。
 * 7.通过 <iframe> 载入的任何资源。站点可以使用 X-Frame-Options 标头来阻止这种形式的跨源交互。
 * 
 * 同源策略限制以下几种行为
 * 跨源读操作（Cross-origin reads）一般是不被允许的
 * 1.Cookie、LocalStorage 和 IndexDB 无法读取
 * 2.DOM和JS对象无法获取
 * 3.AJAX请求不能发送
 * 
 * 
 * 规范要求，对那些可能对服务器数据产生[副作用]的 HTTP 请求方法
 * （特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），
 * 浏览器必须首先使用 [OPTIONS 方法发起一个预检请求]（preflight request），
 * 从而获知服务端是否允许该跨源请求。服务器确认允许之后，才发起实际的 HTTP 请求。
 * 在预检请求的返回中，服务器端也可以通知客户端，
 * 是否需要携带身份凭证（例如 Cookie 和 HTTP 认证相关数据）。
 * 
 * 跨域问题：同源策略仅是针对浏览器的安全策略。服务器端调用HTTP接口只是使用HTTP协议，
 * 不需要同源策略，也就不存在跨域问题。
 * 
 * 
 */

/**
 * 浏览器缓存
 * 
 * 浏览器缓存获取顺序
 * 1.先找内存
 * 2.再找硬盘
 * 3.硬盘也没有,那么就进行网络请求
 * 
 * 缓存存储优先级
 * 硬盘缓存会将命中[强缓存]的js,css,图片等资源都收入囊中
 * 内存缓存就不行,为了节省空间,要有策略
 * 浏览器内存缓存生效的前提下，JS 资源的执行加载时间会影响其是否被内存缓存(存疑)
 * 
 * 
 * preload 和 prefetch
 * preload:预加载,用于link标签中,可以指明哪些资源是页面加载完成后立刻需要的,
 * 然后浏览器会在主渲染进程机制介入前预先加载这些资源,并不会阻塞页面的初步渲染
 * <link rel="preload" href="https://i.snssdk.com/slardar/sdk.js" as="script" />
 * 
 * prefetch:预提取,告诉浏览器下一个页面可能会用到的资源,浏览器会利用空闲时间进行下载并存到缓存中
 * <link rel="prefetch" href="https://i.snssdk.com/slardar/sdk.js" />
 * 用这两个可以控制加载时机,极大地提升性能
 * 
 * 
 */

/**
 * Service Worker
 * 掘金小册:https://juejin.cn/book/6994678547826606095/section/6996932903829504037?enter_from=course_center&utm_source=course_center
 * 为了让 web 技术在移动时代的浪潮中能够分得一杯羹，各大浏览器厂商便纷纷开始
 * 支持及推进渐进式 Web 应用（Progressive Web Apps）的使用，即我们熟知的 PWA。
 * 
 * 从本质上讲，渐进式 Web 应用程序仍然是 Web 应用程序，但其支持渐进式增强，
 * 在现代浏览器中可以使用新功能，如果新功能不可用，用户仍然可以获得核心的体验。
 * 
 * PWA特性:
 * 1.功能强大 在现代 API、WebAssembly 和新的即将推出的 API 之间，Web 应用程序比以往任何时候都更强大）
 * 2.可靠性（无论网络如何，可靠的渐进式 Web 应用程序都会让用户感觉到快速）
 * 3.可安装 已安装的渐进式 Web 应用程序在独立窗口中运行，而不是在浏览器 tab 页中运行）
 * 
 * Service Worker本质上是一种用JavaScript编写的脚本,其作为一个独立的线程,它可以使
 * 应用程序能够控制网络请求,缓存这些请求以提高性能,并提供对缓存内容的隔离访问
 * 
 */
// sw的注册
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    // 此时 Service Worker 只会代理 xxx 目录下的请求。
    scope: '/xxx'
  }).then(function (registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
    .catch(function (error) {
      console.log('Service worker registration failed, error:', error);
    });
}

/**
 * 一旦浏览器执行了注册流程后，在 sw.js 文件中，其便会尝试执行 
 * Service Worker 的 install 安装事件，该事件只会触发一次，
 * 即在首次注册或者有新的 Service Worker 之后执行。
 */
// sw.js
// 此版本的 Service Worker 中使用的两个缓存的名称，更新任意一个缓存名称，都将再次触发安装事件
const PRECACHE = 'precache-v1'
const RUNTIME = 'runtime'
// 想被缓存的本地资源列表
const PRECACHE_URLS = [
  'index.html',
  './', // index.html 的别名
  'styles.css',
  '../../styles/main.css',
  'demo.js'
]
// 安装事件中缓存预先我们想要缓存的资源
self.addEventListener('install', event => {
  event.waitUntil(
    // 调用浏览器 CacheStorage open 方法
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting()) // self.skipWaiting 可以阻止等待，让新的 Service Worker 安装成功后立即激活
  )
})
// 一旦激活，Service Worker 将控制在其范围内加载的所有页面
// 当然并不是所有的网页都适合使用 Service Worker 技术，
// 一般当你的应用趋于稳定并且用户体验决定着用户存留的时候，此时不妨可以试试它。

/**
 * 自动授权登录 jwt
 * 1.服务器自动植入,用set-cookie  不用前端操作
 * 2.前端手动存储 
 * 相比于服务端自动植入,前端存储的方式不受限于浏览器环境,比如像APP或者小程序等没有浏览器cookie
 * 的环境下也可以使用
 * 
 * cookie
 * 不能超过4k,限制了存大数据的能力,不建议将非用户身份类信息存到cookie
 * 因为 Cookie 在[同域]下会伴随着每一次资源请求的[请求报头]传递到服务端进行验证，
 * 试想一下如果大量非必要的数据存储在 Cookie 中，伴随着请求响应会造成多大的无效资源传输及性能浪费。
 * 
 * Web Storage 作为 HTML5 推出的浏览器存储机制，
 * 其又可分为 Session Storage 和 Local Storage，两者相辅相成。
 * Session Storage 作为临时性的本地存储，其生命周期存在于网页会话期间
 * Local Storage 则存储于浏览器本地，除非手动删除或过期，否则其一直存在，属于持久性缓存
 * 一般为 2.5-10M 之间（各家浏览器不同），这容量对于用于网页数据存储来说已经十分充足。
 * 
 * Web Storage 提供的原始 API 可以轻松完成任务，但是一旦数据类型变为 Object 类型时，其应付起来就变得捉襟见肘，
 * 主要原因在于使用 Web Storage 存储的数据最终都会转化成[字符串类型]
 * 
 * IndexedDB 是一个大规模的 NoSQL 存储系统，它几乎可以存储浏览器中的任何数据内容，
 * 包括二进制数据（ArrayBuffer 对象和 Blob 对象），其可以存储不少于 250M 的数据。
 * IndexedDB 目前在不同浏览器中的兼容性并不是那么好，
 * 因此使用 IndexedDB 时还需进行权衡，遵循渐进增强原则。
 * 
 * 
 */