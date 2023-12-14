<template>
  <div @click="add">计数器:{{ count }}</div>
</template>

<script setup>
// 手写迷你版Vuex
import { computed } from "vue";
import { useStore } from "../store/miniStore";
let store = useStore();
let count = computed(() => store.state.count);

function add() {
  store.commit("add");
}
</script>
