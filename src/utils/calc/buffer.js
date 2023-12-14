/**
 * export default是为了方便引用者起名字,import时候可以任意命名
 * export default每个模块只能导出一次
 * 可以同时输出default和其他接口
 * 
 * export import 同时使用
 * export {hello} from ''
 * hello实际上并没有导入当前模块,只是相当于对外转发了这个接口
 * 
 * 除了加载某个特性值,可以用*指定一个对象,所有的输出值都在这个对象上
 * (整体加载)
 * 
 * as可以改名,export {a as b} from '' 引入a,改名为b导出
 * 默认接口写法如下:
 * export {default} from ''
 * 默认接口也可以改为具名接口:
 * export { default as es6 } from './someModule';
 * ES2020补充:
 * export * as ns from 'someModule'
 */
export const bufferTest = () => {
  let FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
  let FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
  let FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
  // console.log(FLT_SIGNBIT)
  // console.log(FLT_EXPONENT)
  // console.log(FLT_MANTISSA)
  let buf = new ArrayBuffer(12)
  let num = 987
  let bNum = num.toString(2)
  console.log(bNum)
  console.log(buf)
}

export default {
  test() {
    console.log('test')
  }
}