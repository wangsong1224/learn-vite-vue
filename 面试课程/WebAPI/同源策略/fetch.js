/**
 * 
 * fetch() 强制接受一个参数，即要获取的资源的路径。它返回一个 Promise
 */
/**
 * fetch请求成功后,得到的是个Response对象,它对应服务端HTTP响应
 * 教程:https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html
 */
fetch('https://api.github.com/users/ruanyf')
  .then(res => {
    console.log(res)
    return res.json
  })
  .then(json => {
    console.log(json)
  }).catch(e => {
    console.error(e)
  })