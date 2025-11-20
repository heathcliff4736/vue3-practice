<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
const count = ref(0);
watch(count, (currentValue, preValue) => {
  console.log(currentValue, preValue);
});
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    count.value++;
  }, 500);
});

onBeforeUnmount(() => {
  clearInterval(timer); // 메모리 누수 방지
});
</script>
<template>
  <h1>ref : {{ count }}</h1>
  <button @click="count++">ref 증가 버튼2</button>
</template>
