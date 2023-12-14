/**
 * cookie localStorage sessionStorage区别
 * 
 * cookie本身是HTTP请求的一部分,用来做权限验证等等,
 * 而且比较小只有4k
 * 本身不适合用来做存储
 * 
 * 现在主流的[权限认证]是JWT,
 * 将JWT放在HTTP 请求头信息的 Authorization 字段里（主流做法）。
 * 或者页面跳转的时候放到URL上
 * 
 * localStorage和sessionStorage才是专门用来做存储
 * 1.专门为存储设计,最大5M,每个域名可以存5M
 * 2.API简单易用,setItem getItem
 * 3.不会随着HTTP请求发送
 * 
 */
//在请求时会被带上,受同源策略影响
document.cookie = 'a=12'
