let obj = {
  name: { n: 'name' },
  number: new Set([1, 2, 3])
}
// Map突破了对象中只能用字符串当[键]的限制 比如可以用Symbol('unique'),
// 甚至对象当做键
/**
 * 它接受[[k,v],[k,v]]这样的数据结构 k可以为任何变量
 * 是这种二维数组的结构
 * new Map({}) 会报错,object is not iterable (cannot read property Symbol(Symbol.iterator))
 * 说明对象不具有iterator接口类型,不能遍历 也就是不能用for of循环
 * 
 * 这时候应该看明白了,[] Set Map其实本质上都是数组结构的数据,
 * 所以他们才能用for of遍历
 * 
 * 而对象只能用for in
 */
let arr = [
  [obj, Symbol('unique')],
  [1, [1, 2]]
]
let map = new Map(arr)
/**
 * 实际上相当于执行了以下操作,
 * 分析下面方法,forEach((k,v)=>{})
 * 然后对k进行解构赋值,因为是数组所以写法如下(例如 let [a,b,c]=[1,2,3])
 * [key,value] key相当于数组第0项,value相当于数组第1项
 * key,value随便取名字 解构赋值会按照对应的位置取值
 * 想想useState  const[state,changeState]=useState(1)
 * 
 * 数组的元素是按[次序]排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，[变量必须与属性同名]，才能取到正确的值。
 * 所以后面的{v}取不到任何值
 */
// 
arr.forEach(([key, value]) => {
  map.set(key, value)
})
let simpleArr = [1, 2, 3]
/**
 * 展开运算符,可以在数组或函数参数
 */
let simpleSet = new Set([...simpleArr])
let simpleObj = { a: 1, b: 2 }
// 浅拷贝
let anotherObj = { ...simpleObj }
console.log('simpleSet', simpleSet)
// Spread syntax requires ...iterable[Symbol.iterator] to be a function
// 得用上面的写法 anotherObj = { ...simpleObj } 用新对象承接
// console.log('展开arr之后', ...simpleArr)
console.log('展开obj之后', anotherObj)

let anotherArr = [...[1, 2, 3]]
console.log(anotherArr)
simpleArr.forEach((v, k) => {
  console.log(v, k)
})
let arrMap = simpleArr.map((v, k) => {
  console.log(v, k)
  return v
})
// 改,增
map.set(true, true)
// 查
map.has(obj)
// 取
map.get(obj)
// 删
map.delete(true)







console.log(map)
export default {
  map
}