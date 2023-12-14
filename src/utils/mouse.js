import { ref, onMounted, onUnmounted } from 'vue'
export function useMouse() {
  let x = ref(0)
  let y = ref(0)
  // 监控鼠标事件,重新赋值
  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
    // console.log(x, y)
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}