import { isObject } from "element-plus/es/utils"
import { reactive } from "./effect"

/**
 * 设置 proxy 的处理函数
 */
const get = createGetters()
const set = createSetters()

function createGetters(shallow = false) {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    /**
     * track 函数负责把 effect 注册到依赖地图中
     */
    track(target, 'get', key)
    if (isObject(res)) {
      return shallow ? res : reactive(res)
    }
    return res
  }
}

function createSetters() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    /**
     * trigger 函数负责把所有的 effect 依次执行
     */
    trigger(target, 'set', key)
    return result
  }
}

export const mutableHandlers = {
  get,
  set
}