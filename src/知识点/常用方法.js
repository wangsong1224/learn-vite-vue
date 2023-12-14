let redux = () => {
  /*
  应用中使用集中式的全局状态管理,并明确更新状态的模式,以便让代码具有可预测性
  不可变性:实现不可变,要复制
  */
  let keyMap = {
    'action': {
      /**
       * 是一个具有type字段的普通JavaScript对象,可以将action视为描述应用程序中发生了什么的事件
       * 1.type是字符串,给action一个描述性的名字,比如 todos/todoAdd 通常写成 域/事件名称
       * 2.payload
       * const addTodoAction = {
            type: 'todos/todoAdded',
            payload: 'Buy milk'
          }
      */

    },
    'reducer': {
      /**
       * reducer是一个函数,接受 state 和 action,必要时决定如何更新状态,并返回新状态
       * 可以将reducer视为一个事件监听器,通过接收到的action来处理事件
       * "Reducer" 函数的名字来源是因为它和 Array.reduce() 函数使用的回调函数很类似。
       * 1.禁止直接修改state,因为不可变性
       * 2.禁止任何异步,依赖随机性值等等导致的副作用代码
       * 3.仅使用state和action中的数据生成新的状态值
       * 
      */
      counterReducer(state = initialState, action) {
        // 检查 reducer 是否关心这个 action
        if (action.type === 'counter/increment') {
          // 如果是，复制 `state`
          return {
            ...state,
            // 使用新值更新 state 副本
            value: state.value + 1
          }
        }
        // 返回原来的 state 不变
        return state
      }
    },
    'store': {
      /**
       * 当前redux应用的state存在于一个名为store的对象中
       * Redux store 是使用 Redux Toolkit 中的 configureStore 函数创建的。
       * configureStore 要求我们传入一个 reducer 参数。
       * 
       * Redux Slice
       * “slice” 是应用中单个功能的 Redux reducer 逻辑和 action 的集合,通常定义在一个文件中
       * 根据不同功能模块的状态对象拆分为多个状态的slice
       *  import { configureStore } from '@reduxjs/toolkit'
          import usersReducer from '../features/users/usersSlice'
          import postsReducer from '../features/posts/postsSlice'
          import commentsReducer from '../features/comments/commentsSlice'
          export default configureStore({
            reducer: {
              users: usersReducer,
              posts: postsReducer,
              comments: commentsReducer
            }
          })
          state.users，state.posts，和 state.comments 均是 Redux state 的一个 独立的 “slice”。
          由于 usersReducer 负责更新 state.users slice，我们将其称为 “slice reducer” 函数。

          我们的组件不能直接与 Redux store 对话，因为组件文件中不能引入 store。
          但是，useSelector 负责为我们在幕后与 Redux store 对话。 

          整个应用程序所需的全局状态应该放在 Redux store 中。而只在一个地方用到的状态应该放到组件的 state。
          防止滥用store
          应用程序的其他部分是否关心这些数据？
          你是否需要能够基于这些原始数据创建进一步的派生数据？
          是否使用相同的数据来驱动多个组件？
          能够将这种状态恢复到给定的时间点（即时间旅行调试）对你是否有价值？
          是否要缓存数据（即，如果数据已经存在，则使用它的状态而不是重新请求它）？
          你是否希望在热重载视图组件（交换时可能会丢失其内部状态）时保持此数据一致？

          redux三大原则
          1.单一数据源
          整个应用的 全局 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
          2.state不可变
          唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
          3.使用纯函数执行修改
          为了描述 action 如何改变 state tree，你需要编写纯的 reducers。
      */
    }
  }
}




// 表示没有返回值
void function f() { }
null === null //true
undefined === undefined //true
null == undefined// true
null === undefined// false

// String 有最大长度是 2^53 - 1
// 因为 String 的意义并非“字符串”，而是字符串的 UTF16 编码，
// 我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。
/*
https://juejin.cn/post/6844903680362151950
JavaScript 中的 Number 类型有 18437736874454810627(即 2^64-2^53+3) 个值。
0.1+0.2!=0.3
js是双精度浮点数,64位 0.1和0.2转换成二进制后会无限循环
0.1 -> 0.0001100110011001...(无限循环)
0.2 -> 0.0011001100110011...(无限循环)  
但是由于IEEE754标准的尾数位数限制,多余的会被截掉,在进制转换中精度已经丢失
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//另外定义一个createNew()用来模拟new关键字的执行过程
function createNew(fn, ...args) {
  // 1. 创建一个空对象
  let obj = {};
  // 2. 将obj的__proto__属性指向构造函数的prototype
  obj.__proto__ = fn.prototype;
  // 3.将fn的执行上下文创建的this绑定到obj上，并执行
  let result = fn.apply(obj, args);
  //fn.apply()的返回值就是fn的返回值，由于例子中Person()没有返回值,所以此处返回值是undefined
  //console.log(result) //undefined
  //4. 如果构造函数返回的是引用数据类型，则直接返回这个结果。否则，返回新创建的对象
  return result instanceof Object ? result : obj;
}

for (let i of Object) {
  console.log(i)
}






let a = [1, 2, 3]
/**
 * splice(起始坐标,删除个数,替换值)
 * 会改变原数组
 * a.splice(1,1) 删除i==1的元素
 * a.splice(1,0,7) 从i===1后边插入元素7
 * a.splice(1,1,7) 删除i===1,之后插入元素7
 * 
 * slice(起始坐标,终止坐标(选填))
 * 截取数组,返回截取的值,不改变原数组
 * let bb=a.slice(1) 从i===1开始截取到最后,返回截取后的数组,a不变
 * 依次为 
 * total 初始值或计算后的返回值
 * currentValue 当前元素
 * currentIndex 当前元素索引
 * arr 当前元素所属的数组对象
 * initialValue 传递给函数的初始值,如果传了,相当于给total赋值了
 * reduce(function(total,currentValue,currentIndex,arr),startIndex)
 * 
 * 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：调用reduce时提供initialValue，
 * accumulator取值为initialValue，currentValue取数组中的第一个值；
 * 没有提供 initialValue，accumulator取数组中的第一个值，currentValue取数组中的第二个值。
 * 例如:
 * const values = [10, 5, 8, 20, 3];
  const max = values.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
  console.log(max); // 输出: 20
  
 */
splice()

typeof NaN === 'number' //true
NaN == NaN //false
NaN === NaN //false
1.890.toFixed(2)// 变成了字符串,是四舍五入







/*
 我们把宿主发起的任务叫宏任务,由JS引擎发的的任务为微任务
 这里每次的执行过程，其实都是一个宏观任务。我们可以大概理解：
 宏观任务的队列就相当于事件循环。在宏观任务中，JavaScript 的 Promise 还会产生异步代码，
 JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，
 每个宏观任务中又包含了一个微观任务队列：有了宏观任务和微观任务机制，我们就可以实现 JavaScript 引擎级和宿主级的任务了，
 例如：Promise 永远在队列尾部添加微观任务。setTimeout 等宿主 API，则会添加宏观任务。
*/

const t1 = new Date()
setTimeout(() => {
  const t3 = new Date()
  console.log('setTimeout block')
  console.log('t3 - t1 =', t3 - t1)
}, 100)
let t2 = new Date()
while (t2 - t1 < 200) {
  t2 = new Date()
}
console.log('end here')
/*
输出答案是 200。同样的，上边是两个宏任务。整个脚本是第一个宏任务。计时器生成了第二个宏任务。
只有第一个宏任务执行结束后才会执行第二个宏任务。
所以即使定时器时间到了也不会立刻执行，只有当第一个宏任务执行结束后才会去执行定时器的任务，
此时已经过去了 200 毫秒。
*/

async function method() {
  console.log(1); //[1]
  new Promise((resolve) => resolve()).then(() => console.log(2)); // 第 1 个宏任务中注册微任务 1 // [5]
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      new Promise((resolve) => resolve()).then(() => console.log(3)); // 第 2 个宏任务中注册微任务 2 // [10]
    }, 0); // 注册宏任务 2
  }).then(() => console.log(4)); // 第 2 个宏任务中注册微任务 1 // [9]
  await method3(); // 第 1 个宏任务中注册微任务 2
  console.log(5); // 第 1 个宏任务中注册微任务 2 // [6]
  const n = await method2(); // 第 1 个宏任务中注册微任务 2
  console.log(n); // 第 1 个宏任务中注册微任务 2 // 第 3 个宏任务中注册微任务 1 // [12]
}

function method2() {
  const promise = new Promise((resolve) => {
    console.log(6); // [7]
    setTimeout(() => {
      console.log(7); // [11]
      resolve(8);
    }, 0); // 注册宏任务 3
  });
  return promise;
}

function method3() {
  const promise = new Promise((resolve) => {
    console.log(9); //[2]
    resolve();
  });
  return promise;
}

function main() {
  method();
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    console.log(10); // 第 1 个宏任务中注册微任务 3 // [8]
  });
  console.log(11); //[3]
}

main();
console.log(12); //[4]