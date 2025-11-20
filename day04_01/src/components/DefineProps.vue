<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  count: Number, // count 값의 자료형 Number
  state: [Object, Array], // state 값의 자료형은 Object 또는 Array 중 하나이다.
});
</script>
<template>
  <h1>{{ props.count }}</h1>
  <h1>{{ props.state.count }}</h1>
</template>

<!-- DefineProps 컴포넌트에서는 부모(App.vue)에서 전달한 반응형 데이터를 
 defineProps 사용하여 받아서 출력할수있다. -->
