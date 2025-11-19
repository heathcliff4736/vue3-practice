<script setup>
import { ref } from 'vue';
const inputRef = ref(null);
const inputValue = ref('');
const focus = () => {
  inputRef.value.focus();
  alert(`${inputValue.value}`);
};
</script>
<template>
  <div>
    <button @click="focus">focus</button><br />
    <input type="text" v-model="inputValue" ref="inputRef" placeholder="입력" />
  </div>
</template>
