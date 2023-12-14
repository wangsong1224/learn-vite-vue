/**
* 面试题?
* DOM是哪种数据结构?
* DOM常见的API?
* attr和property的区别?
property:修改对象属性,像style 不会体现到html结构中
attr:修改HTML属性,会改变DOM结构
* 一次性插入多个DOM节点,考虑性能?

*/

/**
* 知识点:
* DOM的本质
* DOM节点操作
* DOM结构操作
* DOM性能问题
*/
/**
* DOM的本质:
* 文档对象模型,DOM就是由HTML解析生成的树状结构
*/
/**
* DOM节点操作:
*/
const div1 = document.getElementById('div1')
const div2 = document.querySelector('#div2')
console.log('div1', div1)

const divList = document.getElementsByTagName('div')
console.log('divList', divList)
console.log(divList[0])

const containerList = document.getElementsByClassName('.container')
console.log('containerList', containerList)
console.log(containerList[0])

/**
 * 其必须是一个有效的 CSS 选择器字符串
 */
const pList = document.querySelectorAll('p')
//这个是JD的面试题
const thirdP = document.querySelector('#div1>p:nth-child(3)')
const div11 = document.querySelector('#div1')
console.log('thirdP', thirdP.innerText)
/**
 * src =目标地址; (可以通过此语句改变目标文件，比如切换图片等)
 * href = 目标链接; (可以通过该语句改变目标网页);
 * alt = 目标替换文本; (在图片信息改变的时候，这个同时设置)
 * title = 目标图片提示信息;（在图片改变的时候，他的提示信息也是改变的）
 * 
 * 
 * HTML中src和href的区别:
 * src(Source)是指向物件的来源地址，是引入，在 img、script、iframe 等元素上使用；
 * 在请求src资源时会将其指向的资源下载并应用到文档内
 * 
 * href(Hypertext Reference)是超文本引用，指向需要连结的地方，
 * 是与该页面有关联的，是引用，在 link(引入CSS样式)和a 等元素上使用
 */

/**
 * property
 */
thirdP.style.width = '100px'
thirdP.style.className = 'third-p'
console.log(thirdP.style.width)
// class因为是个关键字，因此使用className来操作元素类名属性
console.log(thirdP.nodeName)
console.log(thirdP.nodeType)
//文本内容,这里把p标签忽略掉了  只能获取目标标签的内容，但是不能识别标签
console.log(div11.innerText)
//它不仅仅能获取目标标签的内容而且还能获取目标标签中的其他标签。
//这里可能会发生XSS攻击
console.log(div11.innerHTML)

/**
 * attr
 * 修改的标签的属性
 * 也可以添加自定义属性:data-开头做为属性名并且赋值
 */
// 
thirdP.setAttribute('data-color', 'red')
thirdP.setAttribute('data-height', '18')
const attrP = thirdP.getAttribute('data-name')
thirdP.setAttribute('style', 'font-size:50px')
console.log(attrP)
console.log(thirdP.dataset) //是个对象
console.log(thirdP.dataset.color)
// 这里输出一个对象
// {
//   "color": "red",
//   "height": "18"
// }

//节点操作
const pLast = document.createElement('p')
pLast.style.border = '5px dashed red'
pLast.innerText = '最后一个'
const pInsert = document.createElement('p')
pInsert.color = 'yellow'
pInsert.innerText = '插入的p'
// 结尾追加,相当于push
div11.appendChild(pLast)

//appendChild也可以[移动元素] 获取一个已知元素,从div11移动到了div2
div2.style.border = '10px dotted pink'
div2.appendChild(pLast)

//父元素.insertBefore(要插入的元素,插在谁的前边)
div11.insertBefore(pInsert, thirdP)

//父元素删除子节点
div11.removeChild(pInsert)

// 获取子元素
// 获取子元素标签
console.log(div11.children)

// 获取所有类型子元素
let childNodes = div11.childNodes;
console.log(childNodes)

// 怎么获取文本类型子元素
// 拿到的是/n
let textList = Array.from(childNodes).filter(c => c.nodeType === 3)

/**
 * nodeType
 * 1 元素节点
 * 3 文本节点
 * 11 DocumentFragment节点
 */
console.log(textList)

/**
 * 元素几点的常用属性及方法:
 * attributes：返回一个与该元素相关的所有属性的集合。
 * classList：返回该元素包含的 class 属性的集合。
 * className：获取或设置指定元素的 class 属性的值。
 * clientHeight：获取元素内部的高度，包含内边距，但不包括水平滚动条、边框和外边距。
 * clientWidth：返回该元素它内部的宽度，包括内边距，但不包括垂直滚动条、边框和外边距。
 * clientTop：返回该元素距离它上边界的高度。
 * clientLeft：返回该元素距离它左边界的宽度。
 * innerHTML：设置或获取 HTML 语法表示的元素的后代。
 * tagName：返回当前元素的标签名。
 */
console.log('元素几点的常用属性及方法====')
thirdP.classList = 'third pp aa'
console.log(thirdP.classList) // 是个类数组对象
// {
//   "0": "third",
//   "1": "pp",
//   "2": "aa"
// }
console.log(thirdP.classList[0])//这样也能获取

thirdP.style.border = '4px solid blue';
thirdP.style.padding = '10px'
console.log(thirdP.clientHeight)
console.log(thirdP.offsetHeight)
console.log(thirdP.clientWidth)
console.log(thirdP.offsetWidth)
console.log(thirdP.clientTop)
console.log(thirdP.clientLeft)
// offsetLeft是一个JavaScript DOM属性，用于获取一个元素相对于其父元素的水平偏移量。
console.log(thirdP.offsetLeft)
console.log(thirdP.offsetTop)
