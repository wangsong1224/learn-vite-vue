/**
 * 归并排序
 * 归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。
 * 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
 * 算法步骤:
 * 1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
 * 2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
 * 3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
 * 4. 重复步骤 3 直到某一指针达到序列尾；
 * 5. 将另一序列剩下的所有元素直接复制到合并序列尾。
 */
// 归并排序递归
export const mergeSort = (arr) => {  // 采用自上而下的递归方法
  // console.log('归并排序')
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  console.log(arr)
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
// 归并排序merge
const merge = (left, right) => {
  let result = [];
  // console.log('left&right')
  // console.log(left)
  // console.log(right)
  // debugger
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());
  // console.log('result')
  // console.log(result)
  return result;
}

/**
 * 快速排序
 * 快速排序是由东尼·霍尔所发展的一种排序算法。在平均状况下，排序 n 个项目要 
 * Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次比较，但这种状况并不常见。
 * 事实上，快速排序通常明显比其他 Ο(nlogn) 算法更快，因为它的内部循环（inner loop）
 * 可以在大部分的架构上很有效率地被实现出来。
 * 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
 * 算法步骤:
 * 1. 从数列中挑出一个元素，称为 "基准"（pivot）;
 * 2. 重新排序数列，所有元素比基准值小的摆放在基准前面，
 *    所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
 *    在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
 * 3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；
 * 
 * 1）在数据集之中，选择一个元素作为"基准"（pivot）。
 * 2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * （3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 * 
 * 快速排序的最坏运行情况是 O(n²)，比如说顺序数列的快排。但它的平摊期望时间是 O(nlogn)，
 * 且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。
 * 所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。
 */
const partition = function (arr, left, right) {
  // 基准值
  const pivotValue = arr[left];
  // 从左往右找大值的下标记录
  let i = left;
  // 从右往左找小值的下标记录
  let j = right;
  console.log('left&right')
  console.log(left)
  console.log(right)
  // debugger
  while (i < j) {
    // 从左往右记录大于基准的大值
    while (i < j && arr[i] <= pivotValue) {
      i++
    }

    // 从右往左记录小于基准的小值
    while (i < j && arr[j] >= pivotValue) {
      j--
    }

    if (i < j) {
      // 交换找到的大值和小值
      [arr[i], arr[j]] = [arr[j], arr[i]]
      // 交换后继续查找
      i++;
      j--;
      console.log('交换')
      console.log([...arr])
    }
  }
  // 这里其实i === j, 想不明白的自己拿一个数组按这个步骤走。
  [arr[i], arr[left]] = [arr[left], arr[i]];
  console.log('总体交换')
  console.log([...arr])

  // 返回基准下标
  return i;
}

export const quickSort = function (arr, left = 0, right = arr.length - 1) {
  // 递归结束条件
  if (left >= right) return;

  // 基准下标
  let pivotIndex = partition(arr, left, right)
  // console.log(pivotIndex)
  // 对左区再选基准分区
  quickSort(arr, left, pivotIndex);

  // 对右区再选基准分区
  quickSort(arr, pivotIndex + 1, right);
  // console.log([...arr])
  // 返回拍好序的数组
  return arr;

}


