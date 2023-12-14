<template>
  <div>
    子组件插槽:插槽可以传递HTML标签或者其他组件,这是跟props的区别
    {{ active }}
    <slot name="header"> 插槽默认内容 </slot>
    <slot name="body"> 插槽默认内容 </slot>
  </div>
</template>
<script setup></script>
<style></style>
