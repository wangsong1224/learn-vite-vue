/**
 * 自定义渲染函数
 * 为了让 TypeScript 正确地推导出组件选项内的类型，
 * 我们需要通过 defineComponent() 这个全局 API 来定义组件
 */
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    level: Number
  },
  setup(props, { slots }) {
    const tag = 'h' + props.level
    return () => <tag>{slots.default()}</tag>
  }
})

