<template>
  <div>
    <!-- <p>TodoList</p> -->
    <!-- <TodoList></TodoList> -->
    <p>TodoListHook</p>
    <TodoListHook></TodoListHook>
  </div>
</template>

<script setup lang="ts">
// 引入组件之后,会自动注册,不建议使用 todo-list的命名方式,不好查找
import TodoList from "../components/TodoList.vue";
import TodoListHook from "../components/TodoListHook.vue";
</script>

<style scoped></style>
