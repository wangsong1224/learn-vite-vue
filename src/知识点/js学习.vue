<template></template>
<script>
export default {
  name: "",
};
/**
 * this是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。
 * this的绑定和函数声明的位置没有任何关系，只取决于[函数的调用方式]
 * 当一个函数被调用时，会创建一个活动记录（有时候也称为[执行上下文]）。
 * 这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。
 * this就是这个记录的一个属性，会在函数执行的过程中用到。
 * 学习this的第一步是明白this既不指向函数自身也不指向函数的词法作用域，抛开以前错误的假设和理解
 *
 * 所以函数的执行上下文就是调用栈中
 * 箭头函数不使用this的四种标准规则，而是根据外层（函数或者全局）作用域来决定this。
 *
 */
function foo() {
  // 返回一个箭头函数
  return (a) => {
    //this继承自foo()
    console.log(this.a);
  };
}
var obj1 = { a: 2 };
var obj2 = { a: 3 };
var bar = foo.call(obj1);
bar.call(obj2); // 2, 不是3
// foo()内部创建的箭头函数会捕获调用时foo()的this。
// 由于foo()的this绑定到obj1，bar（引用箭头函数）的this 也会绑定到obj1，箭头函数的绑定无法被修改。（new也不行！

/**
 * JS执行过程包含知识点
 * 1.作用域
 * 2.执行上下文
 * 3.闭包
 *
 * 面向对象
 * 1.原型及原型链
 *
 */

/**
 * V8引擎相关
 * 1.宏任务和微任务
 * 宿主发起的为宏任务,JavaScript引擎发起的为微任务
 * 宏任务:比如settimeout 网络请求等
 * 微任务:promise等
 * 宏观任务中,JavaScript的promise还会产生异步代码,JavaScript必须保证这些异步代码在[一个]宏观任务中完成
 * 所以宏观任务里面又包含了微观任务
 * 像下面这样
 * 宏观任务:[微观任务,微观任务,微观任务]
 * 宏观任务:[微观任务,微观任务,微观任务]
 * 执行顺序:
 * 1.先分析有多少宏观任务
 * 2.每个宏观任务里有多少微观任务
 * 3.根据调用次序,确定宏观任务中微观任务的执行顺序
 * 4.根据宏观任务的触发规则和调用次序,确定宏观任务的执行顺序
 * 5.确定整个顺序
 * 宏观任务执行->执行当前宏任务中的所有微观任务->执行下一个宏观任务.....
 *
 *
 */
// 我们现在要实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色，你会怎样编写这个代码呢？
// function sleep(duration){
//   return new Promise((resolve,reject)=>{
//     setTimeout(resolve,duration)
//   })
// }
// async function changeColor(color,duration){
//   document.getElementById('light').styles.backgroundColor=color
//   await sleep(duration)
// }
// async function main(){
//   while(true){
//     await changeColor(3000,"green");
//     await changeColor(1000, "yellow");
//     await changeColor(2000, "red");
//   }
// }
// main()

/**
 * 上面是宏观层面看,下面是更细粒度,我们来看看[函数的执行过程]
 * 像什么 执行上下文,作用域链,闭包,this,词法环境, 指向的都是同一部分知识,那就是函数执行过程相关知识
 *
 * 闭包其实是一个绑定了执行环境的函数
 * 就是在查找未在本函数作用域中声明的变量的时候,会沿着作用域链找到所有上级作用域中的变量,
 * 然后哪怕父级函数执行完成,应该销毁函数作用域中的变量 但是因为子函数保留着对变量的引用,
 * 导致也不会销毁
 * {
 * 环境:函数词法环境
 * 标识符列表:函数中用到的未声明的变量
 * 表达式:函数体
 * }
 *
 * 执行上下文:函数执行所需要的所有信息
 * ES2018中,执行上下文定义变成了这样
 * {
 * 词法环境:当获取变量或使用this值时使用
 * 变量环境:当声明变量时使用
 * code evaluation state:用于恢复代码执行位置
 * Function:执行的任务是函数时使用,表示正在被执行的函数
 * ScriptOrModule:执行的任务是脚本或者模块时候使用,表示正在被执行的代码
 * Realm:使用的基础库和内置对象实例
 * Generator:仅生成器上下文有这个属性,表示当前生成器
 * }
 *
 * 为了实现let,JavaScript在运行时引入了块级作用域.也就是说在let之前,JavaScript的if for等都不产生作用域
 * 以下是会产生块级作用域的:
 * for  if   switch  try/catch/finally
 *
 * Realm
 * 在实际的前端开发中，通过 iframe 等方式创建多 window 环境并非罕见的操作，
 * 所以，这才促成了新概念 Realm 的引入。
 *
 * this的指向 :this是执行上下文很重要的组成部分,根据函数调用方式的不同,this值也不同
 * https://time.geekbang.org/column/article/83719
 * {
 * 普通函数:
 * function showThis(){ console.log(this); }
 * var o = {
 *  showThis: showThis
 * }
 * showThis(); // global
 * o.showThis(); // o
 *
 * 普通函数this的值,指向调用它所使用的引用(就是谁调用就指向谁)
 * 比如obj.fn(),obj是个引用类型,当它要做一些运算时,会被解引用,获取真正的值(被引用的内容)来参与计算
 * 而类似函数调用,delete等操作,都要用到解引用
 * 这个调用过程,obj会被当做this的值,传入函数的执行上下文中
 * 实际上从运行时的角度来看，this 跟面向对象毫无关联，它是与函数调用时使用的表达式相关。
 *
 * 箭头函数:
 *
 * }
 *
 */

/**
 * 数字
 * 12.toString()
 * 这时候12. 会被当成省略了小数点后面部分的数字,我们可以加个空格 或者 .等
 * 比如 12 .toString() 或者  12..toString()
 * 数字直接量还支持科学计数法
 * 10.24e-2
 * 10.24e2
 * 0b10000 //二进制
 * 0o73    //八进制
 * 0xFA    //十六进制
 * \n 换行符（\u000A）
 * \t 水平制表符（\u0009）
 * \  转义符
 * \r 回车符（\u000D）
 * 如果在一个正常字符前添加反斜杠，JavaScript 会忽略该反斜杠
 * 例如console.log('这\是\一\段\话') 等价于console.log('这是一段话')
 * 今天我们一起学习 JavaScript 的词法部分，
 * 这部分的内容包括了空白符号、换行符、注释、标识符名称、符号、数字直接量、
 * 字符串直接量、正则表达式直接量、字符串模板。掌握词法对我们平时调试代码至关重要。
 *
 * 一个简单的编译程序(四则运算)
 * 1.定义四则运算：产出四则运算的词法定义和语法定义。
 * 2.词法分析：把输入的字符串流变成 token。
 * 3.语法分析：把 token 变成抽象语法树 AST。
 * 4.解释执行：后序遍历 AST，执行得出结果。
 * 这里我们对空白和换行符没有任何的处理，所以词法分析阶段会直接丢弃。
 */

/**
 * 语法
 * JavaScript有两种源文件
 * 1.脚本
 * 2.模块
 * 脚本是可以由浏览器或者Node环境下执行的,模块只能由JavaScript代码使用import导入执行
 * 从概念上,我们可以认为脚本具有主动性的JavaScript代码,是控制宿主完成一定任务的代码
 * 而模块式被动型的JavaScript代码,是等待被调用的库
 *
 * 现代浏览器可以支持用 script 标签引入模块或者脚本，
 * 如果要引入模块，必须给 script 标签添加 type=“module”。如果引入脚本，则不需要 type。
 * script标签属性
 * 1.async :脚本相对于页面的其余部分异步执行(当页面继续进行解析时,脚本将被执行)
 * 2.defer:脚本将在页面完成解析时执行
 * 3.不使用上面两个: 立即解析并执行脚本,并阻塞浏览器解析页面
 *
 * ==的规则
 * 1.undefined==null
 * 2.字符串和Boolean都传换成数字再比较
 * 3.对象转换成primitive类型再比较
 * 看看下面这些反直觉的例子:
 * false == '0' //true
 * true == 'true' //false
 * [] == 0 //true
 * [] == false //true
 * new Boolean('false') == false //false
 *
 */
</script>
<style lang="less"></style>
