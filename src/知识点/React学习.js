/**
 * getDerivedStateFromProps
 * 
 */
/**
 * 虚拟DOM是什么,为什么用
 * 虚拟DOM就是JavaScript表示的DOM节点,内部有tag props children等属性
 * 因为操作DOM开销太大,通过虚拟DOM 将一部分昂贵的浏览器重绘工作转移到相对廉价的存储和计算资源上
 * var e = React.createElement(
    "div",
    { id: "root"},
    React.createElement(
      "h1",
      { className: "title" },
      "Title"
    )
  );
 * 
 */

/**
 * React Diff算法
 * 用来实现 通过对比新旧虚拟DOM树,以在最小的操作次数下将旧树用新树替换
 * 
 * React基于以下两个假设,提出了一套复杂度为O(n)的 启发式算法
 * 1.不同类型(标签名,组件名)的元素会产生不同的树
 * 2.通过key属性来标识一组[同级子元素]在渲染前后是否保持不变
 * 在实践中,以上两条假设在绝大多数情况下都成立
 * 
 * 
 * 
 * 
 */

/**
 * Fiber架构
 * 借鉴了操作系统时间分片的概念,就是把整个虚拟DOM树微观化,变成链表
 * 然后我们利用浏览器的空闲时间计算diff 
 * 按照fps60来算,一帧就是16.6毫秒,在这个时间内 浏览器自己的渲染更新任务执行后,
 * 会有一部分空闲时间,这段时间就来渲染diff
 * 
 */