export class proxy {

}
console.log(12445)
/**
 * proxy可以理解成,在目标对象之前架设一层拦截,外界对该对象的访问,
 * 都必须先通过这层拦截,可以对外界的访问进行过滤和改写
 * 
 */

/**
 * target表示要拦截的目标对象
 * handler 也是一个对象,用来定制拦截行为
 */
// var proxy=new Proxy(target,handler)
var handler = {
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function (target, thisBinding, args) {
    return args[0];
  },

  construct: function (target, args) {
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);

fproxy(1, 2) // 1
new fproxy(1, 2) // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true

/**
 * 可实现链式操作
 * @param value
 * @returns
 */
// var pipe = function (value) {
//   var funcStack = [];
//   console.log(funcStack)
//   var oproxy = new Proxy({} , {
//     get : function (pipeObject, fnName) {
//       debugger
//       if (fnName === 'get') {
//         // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//         return funcStack.reduce(function (total, currentValue) {
//           return currentValue(total);
//         },value);
//       }
//       funcStack.push(window[fnName]);
//       return oproxy;
//     }
//   });

//   return oproxy;
// }

// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;
// debugger

// pipe(3).double.pow.reverseInt.get; // 63