import { ValueOf } from "element-plus/es/components/table/src/table-column/defaults"

//
interface 极客时间课程 {
  课程名字:string,
  价格:number[],
  受众:string,
  讲师头像?:string|boolean,
  获取口令():string
}

let vueCourse: 极客时间课程 = {
  课程名字:'玩转Vue 3全家桶',
  价格:[59,129],
  受众: '前端小老弟',
  讲师头像:false,
  获取口令(){
      return 88
  }
}


// function getProperty<某种类型, 某种属性 extends keyof 某种类型>(o: 某种类型, name: 某种属性): 某种类型[某种属性] {
//   return o[name]
// }
/**
 * 泛型 类型编程 类型推导
 * 函数名<a>(b:c):d  
 * <a>中定义类型 
 * b是函数入参 
 * c是参数类型 
 * d是返回值类型
 * @param o 
 * @param name 
 * @returns 
 */
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

/**
 * 自定义类型 type
 */
type addType=(a:number,b:number)=>number
let add2:addType=(x:number,y:number)=>{
  return x+y
}

interface addType1{
  (a:number,b:number):number
}
let add3:addType1 = function(x: number, y: number): number { 
  return x + y;
}


// keyof 的使用
interface VueCourse5 {
  name:string,
  price:number
}
type CourseProps = keyof VueCourse5 // 只能是name和price选一个
// type ValueProps=valueof VueCourse5
// 'name' 这里被定义为类型
let k:CourseProps = 'name';
let k1:CourseProps = 'price'


/**
 * extends相当于 ts 中的条件语句
 * in 关键字可以理解为 ts 中的遍历
 * T extends U ? X : Y 类型三元表达式
 */
type ExtendsType<T> = T extends boolean ? "重学前端" : "玩转Vue 3"
type ExtendsType1 = ExtendsType<boolean> // type ExtendsType1='重学前端'
type ExtendsType2 = ExtendsType<string> // type ExtendsType2='玩转Vue 3'

type Courses = '玩转Vue 3'|'重学前端'
type CourseObj = {
    [k in Courses]:number // 遍历Courses类型作为key
}
// 上面的代码等于下面的定义
// type CourseObj = {
//     玩转Vue 3: number;
//     重学前端: number;
// }
