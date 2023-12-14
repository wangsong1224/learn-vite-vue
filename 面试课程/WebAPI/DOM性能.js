/**
 * DOM是高
 * 1.DOM缓存
 * 2.将频繁操作改为一次性操作
 * DocumentFragment:
 * 它被作为一个轻量版的 Document 使用，就像标准的 document 一样，
 * 存储由节点（nodes）组成的文档结构。
 * 与 document 相比，最大的区别是它不是真实 DOM 树的一部分，
 * 它的变化不会触发 DOM 树的重新渲染，且不会对性能产生影响。
 * 因为还没有渲染到DOM树上,等到它被插入DOM树,会一次性渲染里面所有元素
 */
//用DocumentFragment一次性插入
const div3 = document.querySelector('.ul1')
const fragment = document.createDocumentFragment()
for (let i = 0; i < 10; i++) {
  const newP = document.createElement('li')
  newP.innerText = `第${i + 1}个列表项`
  fragment.appendChild(newP)
}
console.log(fragment)
div3.appendChild(fragment)