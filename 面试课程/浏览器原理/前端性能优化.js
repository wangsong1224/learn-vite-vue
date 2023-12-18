/**
 * 性能优化
 * 是个综合性问题,没有标准答案,面试官是想听到一个比较全面的思考和理解
 * 全链路
 * 
 * 性能优化原则:
 * 1.多使用内存,缓存或其他方法
 * 2.减少CPU计算量,减少网络请求耗时和数量
 * 空间换时间
 * 
 * 如何入手:
 * 让加载更快
 * 让渲染更快
 * 
 * 让加载更快: 压缩代码, js,css,图片都可以压缩 网络请求报文也可以压缩
 * 
 * 减少访问次数:
 * 合并代码(比如那个webpack-demo中,index.js引入了module.js 但是最终打包的文件
 * 只有一个bundle.js 这就是代码合并,当然了这也不绝对,会增加文件体积 
 * 这需要做一个权衡)
 * 缓存,网络请求合并,SSR服务端渲染
 * 
 * 使用更快的网络:CDN
 * 这种static开头的这种静态资源服务,一般就是CDN, 还有比如我们用Script引入什么jQuery啊,bootstrap啊,一般都是CDN
 * 这里是引入了观测云,数据埋点与上报 走的CDN
 * <script src="https://static.ekuaibao.com/hose/hose-monitor/monitor-3.0.14-patch.1.js"></script>
 * 还有项目中打包完的所有文件都走CDN
 * CDN是完全满足HTTP缓存机制的,而且CDN可以多地区部署,负载均衡,故障转移
 * 
 * 
 * 让渲染更快:
 * CSS放在head,JS放在Body最下面(或使用defer,defer是在DOMContentLoaded之前执行)
 * 尽早开始执行JS,用DOMContentLoaded触发(没必要等图片视频之类的加载)
 * 懒加载(图片懒加载,列表上滑加载更多,分页查询)
 * 对DOM查询进行缓存
 * 频繁操作DOM,合并到一起插入DOM结构,用fragment
 * 节流throttle,防抖debounce
 */
/**
 * 缓存:
 * webpack打包dist,要去符合浏览器缓存机制(协商缓存)
 * 我们期望的是什么呢,比如一次上线,我们只更改了部分文件,我们希望只有这些文件的
 * hash变化,然后缓存失效,重新下载
 * 而其他的文件hash不变,命中缓存
 * 
 * 
 */