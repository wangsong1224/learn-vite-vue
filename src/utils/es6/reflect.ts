/**
 * 将 object 对象的一些明显属于语言内部的方法,比如 Object.defineProperty
 * 放到 Reflect 对象上
 * 未来的新方法将只部署在 Reflect 对象上
 * 也就是说,从 Reflect 对象上可以拿到语言内部的方法
 * 
 */