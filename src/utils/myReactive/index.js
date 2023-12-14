/**
 * vue响应式原理
 * 使用 Proxy 代替 Object.defineProperty,
 * 分为以下步骤:
 * 1.依赖收集
 *   通过 Proxy 将普通 JS 对象变为响应式对象,具体来说就是拦截了 set get 方法
 *   effect 中获取依赖的时候,触发 get 函数,这时候会把当前 effect 函数注册到一个全局的依赖地图中(track)
 *   
 * 2.依赖变化触发执行函数,依次执行
 *   当依赖修改的时候,会触发 set 函数,去依赖地图中找到注册的 effect 函数,然后执行(trigger)
 */