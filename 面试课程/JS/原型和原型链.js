/**
 * 面试题
 * 1.如何准确判断一个变量是不是数组
 * arr instanceof Array 或者 Array.isArray(arr)
 * 2.手写一个简易的jQuery,考虑插件和扩展性
 * [扩展性用继承]
 * 
 * 3.class的原型本质,怎么理解?
 * typeof People==='function'
 * 实例.__proto__===类.prototype,class本质上就是原来构造函数的语法糖
 * 
 * 对照原型链.jpg来说,说继承关系和原型链
 */
/**
 * 知识点
 * class和继承
 * 类型判断 instanceof
 * 原型和原型链
 */

/**
 * class
 * 继承
 */
class People {
  //ES2022新写法,可以定义在最顶层
  count = 0
  // 私有属性
  #count1 = 12
  // 通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor()方法，
  // 如果没有显式定义，一个空的constructor()方法会被默认添加。
  constructor(name, age, count = 0) {
    this.name = name
    this.age = age
    this.count = count
  }
  get getCount() {
    return this.count
  }
  set setCount(value) {
    this.count == value
    this.name = 'www'
  }
  sayHi() {
    console.log(`你好,${this.name} ${this.age}`)
  }
  // 私有方法
  #say() { }
  // 静态方法
  static sayHello() { }
}
const people = new People('ren', 18, 99)
console.log(people.getCount)
people.setCount = 123
console.log(people.getCount)
console.log(people)

// 类的本质就是构造函数,类的数据类型就是函数 类的原型的构造函数就指向类本身
console.log(typeof People) //function
console.log(People === People.prototype.constructor) //true

class Student extends People {
  constructor(name, number, count) {
    super(name, 18, count)
    this.number = number
  }
  learn() {
    console.log(`${this.name} 学号是 ${this.number}`)
  }
}

class Teacher extends People {
  constructor(name, lesson) {
    super(name, 36)
    this.lesson = lesson
  }
  teach() {
    // 可以通过super调用父类的方法
    super.sayHi()
    // 可以通过类名来调用静态方法
    People.sayHello()
    console.log(super.name)
    console.log(`${this.name} 教授 ${this.lesson}`)
  }
}

const student = new Student('wangsong', 100, 77)
const teacher = new Teacher('wanglaoshi', '数学')
console.log(student.count)
// student.sayHi()
// student.learn()

// teacher.sayHi()
teacher.teach()

/**
 * 类型判断:
 * instanceof判断的是
 * 用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
 * 
 */
console.log('instanceof 测试==========')
//以下都是true
console.log(student instanceof Student)
console.log(student instanceof People)
console.log(student instanceof Object)

console.log([] instanceof Array)
console.log([] instanceof Object)
console.log(/[0-9]/ instanceof RegExp)
console.log(new Date instanceof Date)
console.log({} instanceof Object)

/**
 * 原型链,一般都是和继承有关系的,如果没有复杂的继承关系,也就'链'不够长
 * 而js通过原型链才得以实现函数或对象的继承
 * 
 * 显式原型:prototype
 * 隐式原型:[[Prototype]],可由对象的__proto__访问
 */
console.log('原型链 测试==========')
// 
/**
 * 1.构造函数(现在都用class,class本身也是构造函数)都有显式原型(Student.prototype) 
 * 2.它的实例都有隐式原型[[Prototype]],并且实例的隐式原型指向class的显式原型
 * 3.我们找实例的属性或方法时,如果在本身找不到,就按照隐式原型找到构造函数的显示原型上
 * 如果还找不到,就继续找构造函数显示原型的隐式原型,一直找到Object.prototype
 * 这种顺着原型一直查找的过程,就叫原型链
 */
console.log(student.__proto__ === Student.prototype)  //true
console.log(student.__proto__.__proto__ === People.prototype)  //true
console.log(student.__proto__.__proto__.__proto__ === Object.prototype) //true

//补充下构造函数
console.log(People.__proto__ === Function.prototype)
//补充,获取对象原型的方法
console.log(Object.getPrototypeOf(student))
