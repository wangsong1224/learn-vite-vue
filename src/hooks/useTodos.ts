import { ref, computed, watchEffect } from 'vue'
// 习惯性的 use 开头
/**
 * 
 * @returns 
 * 1.需要用到的响应式变量,要在内部定义并返回 
 * 因为是纯函数,可以在任何地方定义,ts 兼容性也更好
 */
export function useTodos() {
  let title = ref("");
  let todos = ref([{ title: "学习Vue", done: false }]);
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  // 跟vue2一样,可以接受函数和对象  对象的话有set,get
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value;
      });
    },
  });
  return { title, todos, addTodo, clear, active, all, allDone };
}
