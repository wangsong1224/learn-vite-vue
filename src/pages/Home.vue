<script setup>
// import * as esTool from "../utils/es6";
import { reactive, effect } from "@vue/reactivity";
import { runSort, runSortTest, runSortTime } from "../utils/calc";
// 可以同时输出default和其他接口
import Def, { bufferTest as bufferTest1 } from "../utils/calc/buffer";
// import { testPromise } from "../utils/es6/promise";

//===============二进制===================
console.log("buffer");
bufferTest1();
//===============二进制===================
/**
 * get 做依赖收集
 * set 触发变更处理函数  也就是吧所有的 effect 依次执行
 */
let dummy;
const counter = reactive({
  num1: 1,
  num2: 2,
});
effect(() => {
  dummy = counter.num1 + counter.num2;
  // console.log(dummy);
});

// 测试排序过程
// runSort()
// 测试自己写的
// runSortTest()
// 测试排序性能
// runSortTime()

const unany = function (fn) {
  // debugger
  return function (arg) {
    // debugger
    return fn(arg);
  };
};

const result = ["1", "2", "3", "4"].map(unany(parseInt));
// console.log('result===')
// console.log(result)

function A() {
  var name = "aa";
  this.age = 18;
  this.getName = function () {
    return name;
  };
}
let aaa = new A();
// console.log(aaa.name)
// console.log(aaa.getName())
// console.log(aaa.age)

class Father {
  constructor(width, length) {}
  logF() {
    // console.log("log");
  }
}
class Son extends Father {
  constructor(length) {
    super(1, length);
  }
  log() {
    // console.log("log son");
  }
}
let sonObj = new Son(108);
sonObj.log();
sonObj.logF();

/**
 *
 * @param {*} n
 * @param {*} memo
 * 用闭包把递归函数中加入记忆,我们可以用它来存储上一次计算的值，就可以避免重复计算了
 * 记忆函数经常和递归结合起来使用
 *
 */

function fibonacci(n, prev = 0, next = 1) {
  if (n === 0) {
    return prev;
  }
  // 尾递归优化 https://juejin.cn/post/7206958960771727416
  /**
   * 尾递归是指一个函数在调用自身之后不再执行任何其他操作，而是将返回值直接传递给函数调用的上级，
   * 从而避免了新的调用栈帧的创建。
   */
  return fibonacci(n - 1, next, prev + next);
}
// console.log("尾递归优化");
// console.log(fibonacci(10, 0, 1));

function fibMemo(n, memo = [0, 1, 1]) {
  // console.log("memo");
  // console.log(memo);
  if (memo[n]) {
    return memo[n];
  }
  // 递归+分治+闭包
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}
// console.log(fibMemo(4)); // 55

let sortArr = [4, 5, 6, 1, 3, 2];
let insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; --j) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
};

// console.log("插入排序");
insertSort(sortArr);
// console.log(sortArr);

/**
 * 快排
 */
// 找分区点
let partition = (arr, left, right) => {
  // 基准点
  const pivotValue = arr[left];
  // 从左往右找大于基准值的下标
  let i = left;
  // 从右往左找小于基准值的下标
  let j = right;
  while (i < j) {
    //
    while (i < j && arr[i] <= pivotValue) {
      i++;
    }
    while (i < j && arr[j] >= pivotValue) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // 交换后继续查找
      i++;
      j--;
    }
  }
  [arr[i], arr[left]] = [arr[left], arr[i]];
  return i;
};
// 快排
let quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;
  let pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
};

let a = [1, 2, 3];
let aftA = a.map((v, k) => {
  console.log(k);
  if (k === 0) {
    return false;
  }
  return v + 1;
});
// console.log(aftA);

// 构造函数
function Father1() {
  this.name = "zhang";
  this.talk = () => {
    console.log("talk");
  };
}

// let aname = "window";
// let ABC = {
//   name: "A",
//   sayHello: () => {
//     console.log(this.aname);
//   },
// };
// ABC.sayHello();

const copy = (obj) => {
  let fakeObj = {};
  for (let k in obj) {
    console.log(k);
  }
  return obj;
};
const copyDeep = (obj) => {};
let arr111 = [1, 2, { a: 1 }];
let obj111 = { a: 1, b: 2, c: { c: 2 } };
let copyArr = copy(arr111);
let copyObj = copy(obj111);
console.log(copyArr);
console.log(copyObj);

// 用hash表,就是index等于value来表示
// 442. 数组中重复的数据
// 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
// 找到所有出现两次的元素。
// 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
// 示例：
// 输入:
// [4,3,2,7,8,2,3,1]
// 输出:
// [2,3]
/**
 * 解题思路:
 * 难点在于空间复杂度和时间复杂度
 * 因为数值范围在数组之间,所以每个数都可以看成数组的下标
 * 我们将对应的坐标值记为负数,既能取到原值 又能代表访问过
 * 如果要标记一个已经标记过的坐标,说明这个坐标出现了两次
 *
 * 散列表用的是数组可以支持下标随机访问的特性
 * 写散列表最重要的就是散列函数
 *
 */

let arrRepeat = [4, 3, 2, 7, 8, 2, 3, 1];
const findRepeat = (arr) => {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    const cur = Math.abs(arr[i]);
    // -1是为了防止访问数组越界：a[i] ≤ n
    // 如果遍历到的 下标为abs(nums[i]) -1的值 为负，说明abs(nums[i])出现了两次
    if (arr[cur - 1] < 0) {
      ans.push(cur);
    }
    arr[cur - 1] *= -1;
  }
  return ans;
};
console.log("算法");
console.log(findRepeat(arrRepeat));
console.log(arrRepeat);
</script>

<template>
  <div>home</div>
  <img
    src=""
    alt="图片无法加载时显示,读屏器阅读图片"
    title="是共有属性,鼠标悬浮显示说明文字"
  />
  <dl>
    <dt>鱼</dt>
    <dd>各种鱼类，除了刺多的鲤鱼</dd>
    <dt>虾</dt>
    <dd>基围虾，龙虾之类的海虾</dd>
    <dt>蟹</dt>
    <dd>当然是阳澄湖大闸蟹好吃啦</dd>
  </dl>
</template>

<style scoped></style>
