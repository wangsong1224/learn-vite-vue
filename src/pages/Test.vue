<template>
  <div>
    testPage
    <testH :level="1">H1</testH>
    <testHJSX :level="2">H2</testHJSX>
  </div>
</template>

<script setup>
// 引入组件之后,会自动注册,不建议使用 todo-list的命名方式,不好查找
import testH from "../testDemo/testH";
import testHJSX from "../testDemo/testHJSX.jsx";
</script>

<style scoped></style>
