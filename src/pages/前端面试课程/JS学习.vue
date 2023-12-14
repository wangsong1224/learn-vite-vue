<template>
  <div>
    <p>JS学习</p>
  </div>
</template>
<script setup>
// import { this1 } from "../../前端面试课程/JS";
import { onMounted, onUnmounted, onUpdated } from "vue";
import { load } from "../load";
onMounted(() => {
  load("../../前端面试课程/JS/JS执行过程(闭包,作用域等)/变量提升.js");
  load("../../前端面试课程/JS/JS执行过程(闭包,作用域等)/this指向问题.js");
  load("../../前端面试课程/JS/JS执行过程(闭包,作用域等)/作用域链和闭包.js");
  load("../../前端面试课程/JS/JS执行过程(闭包,作用域等)/执行上下文.js");
});
</script>

<style scoped></style>
