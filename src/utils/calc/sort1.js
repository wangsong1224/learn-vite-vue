/**
 * 冒泡排序
 * 我们要对一组数据 4，5，6，3，2，1，从小到大进行排序。
 * 思路:遍历数组,如果两个相邻的数据顺序错误,就交换位置.只到遍历完成也没有数据交换,
 * 说明顺序已经正确(引入flag).这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。
 */
/**
 * @param {*} arr 传入的数组
 * @param {*} sort 排序方式 asc正序 desc倒序
 */
export const bubbleSort = (arr) => {
  console.log('冒泡排序')
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两对比
      if (arr[j] > arr[j + 1]) {
        // 元素交换
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/**
 * 插入排序
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是
 * 未排序序列。从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。
 * （如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */
/**
 * @param {*} arr 传入的数组
 * @returns 
 */
export const insertionSort = (arr) => {
  console.log('插入排序')
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    // if (i == 3) {
    //   debugger
    // }
    // 数据移动
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
      // console.log(arr)
    }
    // 插入数据
    arr[preIndex + 1] = current;
    // console.log(arr)
  }
  return arr;
}

/**
 * 选择排序
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
 * 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 重复第二步，直到所有元素均排序完毕。
 */
/**
 * @param {*} arr 传入的数组
 * @returns 
 */
export const selectionSort = (arr) => {
  console.log('选择排序')
  let len = arr.length;
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 寻找最小的数
      if (arr[j] < arr[minIndex]) {
        // 将最小数的索引保存
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    // console.log(arr)
  }
  return arr;
}