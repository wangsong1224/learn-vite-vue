/**
 * ts进阶知识点
 * 
 */

/**
 * 泛型 泛型指的是有的函数参数,你在定义时不知道类型,返回值的类型需要根据参数类型来确定
 */
// 
function func<T>(arg:T):T{
  return arg
}
/**
 * 比如输入
 */
type vueCourse={
  name:string,
  price:number,
  bug():void
}
interface InVueCourse{
  name:string,
  price:number,
  bug():void
}
// type和interface都能约束复杂类型
let vueCourse:vueCourse|InVueCourse={
  name:'课程名称',
  price:100,
  bug(){}
}
// 现在需要一个函数,入参是vueCourse和key名,返回值是vueCourse某个值中的一个
// 写的时候可以先把函数本身实现了,再去写TS
/**
 * 拆解一下,在<>中可以定义很多个[类型变量],也就是T K之类的
 * 
 */
function returnKey<T,K extends keyof T>(vueCourse:T,key:K):T[K]{
  return vueCourse[key]
}
// //箭头函数写法
// let returnKey1<T,K extends keyof T>=(vueCourse:T,key:K)=>{
//   return vueCourse[key]
// }

export default{
  vueCourse
}