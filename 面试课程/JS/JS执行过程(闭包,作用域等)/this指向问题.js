/**
 * 执行上下文:
 * 定义: 指的是执行一段代码时的运行环境
 * 主要包含:{
 *  变量环境:
 *  词法环境:
 *  this:
 * }
 * 分类:{
 *  全局执行上下文:执行全局代码的时候,会创建.整个页面的生命周期内,只有一份
 *  函数执行上下文:当调用一个函数的时候,函数体内的代码会被编译,并创建函数执行上下文
 *    一般情况下,函数执行结束后,会被销毁
 *  eval函数也会创建上下文(用得不多)
 * }
 * 
 */

/**
 * 调用栈:是用来管理函数调用关系的一种栈结构
 * 将要执行的函数依照调用顺序依次压入栈中,函数执行完成后从栈顶中弹出,再从栈顶依次取出
 * 函数执行,直到栈清空
 * 比如先调用函数A,在函数A中又调用函数B,
 * 1.在全局执行上下文中,取出函数A的代码
 * 2.编译函数A,创建函数执行上下文和可执行代码,然后将A的执行上下文压入栈中
 * 3.执行到B函数调用,创建函数B的执行上下文,将B的执行上下文压入栈中
 * 4.B执行完成返回时,该函数执行上下文从栈顶弹出,并将result的值设置成B的返回值
 * 5.在执行A函数的返回操作,A也执行完成,弹出
 * 6.此时调用栈中就只剩下全局执行上下文了
 .*/
var a = 2
function B(b, c) {
  return b + c
}
function A(b, c) {
  var d = 10
  let result = B(b, c)
  console.log(a + result + d)
  return a + result + d
}
A(3, 6)

/**
 * this的指向是跟函数调用方式相关的
 * this的指向分两种
 * 1.普通函数
 * this指向是跟调用方式有关的,指向调用函数对应的对象
 * 2.箭头函数
 * 箭头函数this指向外层执行上下文中的this
 */
/**
 * 普通函数常见的四种this指向
 */
// 1.一般函数调用 this指向全局对象
var x = 1
function test() {
  console.log(this.x)
}
test() // 1
// 2.对象方法调用,this指向该对象
let obj = {
  a: 11,
  // 注意这里不能用箭头函数,会指向window
  say() {
    console.log(this.a)
  },
  sayArrow: () => {
    console.log(this.a)
  }
}
obj.say() //11
obj.sayArrow() //2 输出的是第30行定义的a 也就是说this指向了window

// 3.类或构造函数调用,this指向实例
class Obj {
  constructor() {
    this.aa = 11
  }
  say() {
    console.log(this.aa)
  }
}
let objIns = new Obj()
objIns.say() //11

// 4.apply, call,bind调用
function Animal() {
  this.name = 'animal';
}

function Cat() {
  Animal.call(this);
}

var cat = new Cat();
console.log(cat.name);// 'animal'

/**
 * 箭头函数
 * 所有的对象都是没有作用域的,作用域只有函数,全局,块级
 */
const aObj = {
  name: '张三',
  sayHi() {
    console.log(this)
  },
  wait() {
    //普通函数
    setTimeout(function () {
      //this指向window
      console.log(this)
    })
  },
  wait2() {
    //[箭头函数this 取上级作用域的this]
    setTimeout(() => {
      //this指向当前对象
      console.log(this)
    })
  }
}
let abc = aObj.wait
// 这个赋值操作,相当于重新声明了一个函数,指向了wait2 你可以理解成如下代码
// let bcd=function(){
//   setTimeout(() => {
//     //this指向当前对象
//     console.log(this)
//   })
// }

let bcd = aObj.wait2
console.log('this指向====')
abc() //window
aObj.wait() // window
bcd() //window
// aObj.wait2()


