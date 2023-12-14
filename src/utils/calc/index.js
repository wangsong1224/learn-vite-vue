import { bubbleSort, insertionSort, selectionSort } from './sort1'
import { mergeSort, quickSort } from './sort2'
export { bufferTest } from './buffer'
import { bubbleSort1, insertionSort1, selectionSort1, mergeSort1, quickSort1 } from './test'
/**
 * 生成随机数
 * @param {*} max 最大值
 * @param {*} count 数量
 * @returns 
 */
const random = (max = 100, count = 1) => {
  let arr = []
  let n = max % 10
  for (let i = 0; i <= count; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}
/**
 * 计算排序耗时
 * @param {*} fn 排序函数
 * @param {*} arr 要排序的数组
 */
const time = (fn, arr) => {
  let start = new Date().getTime()
  fn(arr)
  let end = new Date().getTime()
  console.log(end - start)
}

/**
 * 测试排序过程
 */
export const runSort = () => {
  let arr = [11, 8, 3, 9, 7, 1, 2, 5]
  arr = [11, 8, 3, 9, 7]
  // bubbleSort([...arr])
  // insertionSort([...arr])
  // selectionSort([...arr])
  // mergeSort([...arr])
  quickSort([...arr])
}
export const runSortTest = () => {
  let arr = [11, 8, 3, 9, 7]
  // let arr = [11, 8, 3, 9, 7, 1, 2, 5,]
  // bubbleSort1([...arr])
  // insertionSort1([...arr])
  // selectionSort1([...arr])
  // mergeSort1([...arr])
  // quickSort1([...arr])
}

/**
 * 测试排序性能
 */
export const runSortTime = () => {
  let arr = random(100000, 100000)
  // time(bubbleSort, [...arr])
  // time(insertionSort, [...arr])
  // time(selectionSort, [...arr])
  console.log('归并排序')
  time(mergeSort, [...arr])
  console.log('快速排序')
  time(quickSort, [...arr])
}