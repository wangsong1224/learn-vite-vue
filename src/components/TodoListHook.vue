<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
      <!-- 模板里面不用拿value,会自动获取 -->
      {{ x }}
      {{ y }}

      {{ data.length }}
      <SlotChild>
        <template v-slot:header> header插槽内容 </template>
        <template #body> body插槽内容 </template>
      </SlotChild>
    </div>
    <div>
      <!-- <Count /> -->
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watchEffect } from "vue";
// 引入自定义 hooks
import { useTodos } from "../hooks";
import { useMouse } from "../utils/mouse";
import { useLocalStorage } from "../utils/useLocalStorage";
import SlotChild from "./SlotChild.vue";
import Count from "./Count.vue";
import TSLearn from "../知识点/TSLearn.ts";
// import ES6 from "../知识点/es6";

/**
 * 执行 hooks 的时候,ref 等都是从 vue 直接引入的,
 * 并不依赖 this上下文,这对 ts 的类型推导很有用
 */
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
// 在这里data才是响应式数据,useLocalStorage传参是初始化数据
let { data } = useLocalStorage("todos", []);

let { x, y } = useMouse();
watchEffect(() => {
  // 这里写输出x,没有任何变化 要写成x.value watchEffect才会监听到变化
  // console.log(x.value);
  // console.log(y.value);
  console.log(todos.value);
  console.log(data.value);
});
</script>
<!-- scoped 会在标签和样式属性上,新增了 data-的属性选择器 -->
<style scoped></style>
