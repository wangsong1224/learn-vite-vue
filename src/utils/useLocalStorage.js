import { ref, watchEffect } from 'vue'
export function useLocalStorage(name, value = []) {
  console.log(localStorage.getItem(name))
  let data = ref(JSON.parse(localStorage.getItem(name)) || value)
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  })
  return { data }
}