import { defineComponent } from "vue";
/**
 * 定义组件,h函数可以自定义渲染
 * h 函数的第一个参数就是标签名，我们可以很方便地使用字符串拼接的方式，
 * 实现和上面代码一样的需求。像这种连标签名都需要动态处理的场景，
 * 就需要通过手写 h 函数来实现。
 * 
 * h函数实现了自定义渲染,不过标签过多的时候,处理起来会很麻烦,
 * 所以还有一种实现方式是JSX
 * 
 * 动态性较高的场景可以使用JSX
 * 
 */
export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup(props, { slot }) {
    return () => h(
      'h' + level,//标签名
      {}, //prop或attribute
      slots.default() //子节点
    )
  }
})