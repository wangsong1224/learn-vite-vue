import {inject,reactive} from 'vue'
interface Options{
  state:()=>Store
  mutations:any
}

const STORE_KEY='__store__'
function useStore(){
  // Vue 会遍历父组件链，通过匹配 key 来确定所提供的值
  return inject(STORE_KEY)
}
// b
function createStore(options:Options){
  return new Store(options)
}
class Store{
  private _state:any
  private _mutations:any
  constructor(options:Options){
    this.$options = options
    // 注意这里的 state 已经使用 reactive 包裹成响应式数据了。
    // Store 类内部变量 _state 存储响应式数据，读取 state 的时候直接获取响应式数据 _state.data，
    //并且提供了 commit 函数去执行用户配置好的 mutations。
    this._state=reactive({
      data:options.state
    })
    this._mutations=options.mutations
  }
  // main.js入口处app.use(store)的时候，会执行这个函数
  install(app:any){
    app.provide(STORE_KEY,this)
  }
  //获取state,
  get state(){
    return this._state.data
  }
  commit=(type:string,payload:any)=>{
    // debugger
    const entry=this._mutations[type]
    entry&&entry(this.state,payload)
  }
}
export {
  createStore,
  useStore
}