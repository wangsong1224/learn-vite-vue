<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="(todo, i) in todos" :key="i">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
  </div>
</template>

<script setup>
// 在标签内定义的变量和函数,在模板中都可以直接使用
import { ref, reactive, computed } from "vue";
let title = ref("");
let todos = reactive([]);

// 增加元素
const addTodo = (e) => {
  todos.push({
    title: title.value,
    done: false,
  });
  title.value = "";
};

//清理
function clear() {
  todos = todos.filter((todo) => !todo.done);
  console.log(todos);
}

//未完成
let active = computed(() => {
  return todos.filter((v) => !v.done).length;
});

//所有
let all = computed(() => {
  return todos.length;
});

//
let allDone = computed({
  get: function () {
    return active.value === 0;
  },
  set: function (value) {
    todos.forEach((v) => {
      v.done = value;
    });
  },
});
</script>

<style>
h1 {
  color: red;
}
.done {
  color: gray;
}
</style>
