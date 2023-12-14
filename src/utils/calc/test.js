
export const bubbleSort1 = (arr) => {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  console.log(arr)
  return arr
}


export const insertionSort1 = (arr) => {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1;
    let current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  console.log(arr)
  return arr
}


export const selectionSort1 = (arr) => {
  let len = arr.length
  let minIndex
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let tmp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = tmp
  }
  console.log(arr)
  return arr
}


export const mergeSort1 = (arr) => {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middleLength = Math.floor(len / 2)
  let left = arr.slice(0, middleLength)
  let right = arr.slice(middleLength)
  console.log(arr)
  return merge(mergeSort1(left), mergeSort1(right))
}
const merge = (left, right) => {
  let result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  console.log(result)
  return result
}


export const quickSort1 = (arr) => {

}