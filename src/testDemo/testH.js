/**
 * 自定义渲染函数
 */
import { defineComponent, h } from 'vue'
export default defineComponent({
  props: {
    level: {
      type: Number,
      require: true
    }
  },
  setup(props, { slots }) {
    return () => h(
      'h' + props.level,// 标签名
      {},// props 或者attribute
      slots.default()//子节点
    )
  }
})