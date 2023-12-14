/**
 * 面试题
 * 1.HTTP常见状态码有哪些?
 * 2.常见的header有哪些?
 * 3.什么是Restful API?
 * 4.描述下HTTP缓存机制(重要)?
 */
/**
 * HTTP状态码
 * 
 * 
 * 状态码分类:
 * 1xx 服务器收到请求
 * 2xx 请求成功,如200
 * 3xx 重定向, 服务端告诉我们资源地址改变了,然后浏览器会自动请求新地址
 * 4xx 客户端错误
 * 5xx 服务端错误
 * 
 * 常用状态码
 * 200 成功
 * 
 * 301 永久重定向(location返回新地址,浏览器自动处理) 
 * 比如一个网站域名到期了,可以用301 然后浏览器下次就会[自动请求新地址]
 * 
 * 302 临时重定向(location新地址,浏览器自动处理) 
 * 只是这次访问新地址,下次还是请求原地址
 * 
 * 304 资源未被修改
 * 
 * 404 资源未找到
 * 
 * 403 没有权限
 * 
 * 500 服务器错误 比如处理的时候报错了
 * 
 * 504 网关超时 
 */

/**
 * Restful API
 * 传统methods
 * get 获取服务器数据
 * post 向服务器提交数据 像剩下的删除,修改都用post或者get模拟
 * 
 * 现代methods
 * get 获取数据
 * post 新建数据
 * patch/put 修改数据
 * delete 删除数据
 * 
 * 传统API:把每个URL当做一个功能
 * Restful API:把每个URL当做一个唯一的资源
 * 怎么设计成一个资源呢?
 * 1.尽量不使用URL参数
 * 传统的: /api/list?pageIndex=2
 * Restful API: /api/list/2
 * 
 * 2.用methods作为操作类型
 * 传统的在请求地址上区分
 * post /api/create-blog   表示创建
 * post /api/update-blog   表示更新
 * 
 * Restful API 用请求方法来区分
 * post /api/blog
 * patch /api/blog/100
 * get  /api/blog/100
 */

/**
 * HTTP headers
 * 
 * 常见的Request Headers
 * Accept 浏览器可接收的数据格式
 * Accept-Encoding 浏览器可接收的压缩算法,如gzip
 * Accept-Language 浏览器可接收的语言
 * Connection:keep-alive 一次TCP连接重复使用
 * Cookie       同域的cookie请求会自动带上
 * Host         请求的域名
 * User-Agent   浏览器信息,做统计时候用
 * 
 * 
 * 常见的Response Headers
 * Content-type  返回的数据格式,如application/json,text/html,application/x-javascript
 * Content-length 返回数据的大小,单位字节
 * Content-Encoding 返回数据的压缩算法,如gzip
 * Set-Cookie     设置cookie
 * 
 * 我们可以自定义header
 */

/**
 * 可以按照:格式相关,跨域相关,cookie相关,缓存相关来记忆
 * 其他的UA单独记一下, Content-length单独记一下
 * 
 *  Request Header 字段及含义:
  * Accept   浏览器接受的格式 如:application/json, text/plain  
  * Accept-Encoding  浏览器接受的编码方式 如:gzip, deflate, br
  * Accept-Language  浏览器接受的语言,用于判断服务端多语言 如:zh-CN,zh;q=0.9
  * Cache-Control  控制缓存的时效性
  * Connection  连接方式,如果是keep-alive,而且服务端支持,则会复用连接
  * Host  HTTP访问使用的域名
  * Origin scheme(协议)+host(域名)+port(端口),也就是url去掉参数
  * 用来判断是否跨域
  * Reference 当前请求的来源页面
  * If-Modified-Since  上次访问时的更改时间,如果服务端认为此时间后没有更新,则会给出304响应
  * If-None-Match  次访问时使用的E-Tag,通常是页面的信息摘要,这个比更改时间更准确些
  * User-Agent  客户端标识,是一笔糊涂账,好多浏览器这个字段十分复杂,区别微妙
  * Cookie  客户端存储的cookie字段
  * 
  * Response Header 字段及含义
  * Cache-Control 缓存控制,用于通知各级缓存保存时间,例如max-age=0表示不要缓存
  * Connection  连接类型 如果是keep-alive表示复用连接
  * Content-Encoding  内容编码方式 通常是gzip
  * Content-Length  内容长度,有利于浏览器判断内容是否已经结束
  * Content-Type  内容类型,所有请求网页的都是 text/html 还有application/json; charset=utf-8等等
  * Date  当前的服务器日期
  * ETag  页面的信息摘要,用于判断是否需要重新到服务器获取页面
  * Expires  过期时间,用于判断下次请求是否需要到服务端取回页面
  * Keep-Alive 保持连接不断时需要的一些信息,如timeout=5,max=100
  * Last-Modified  页面上次修改的时间
  * Server  服务端软件类型
  * Set-Cookie 设置cookie,可以存在多个
  * Via  服务端请求链路,对一些调试场景至关重要的一个头
 */