<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');

const warningMessage = computed(() => {
  return searchText.value.length > 10 ? '10자를 초과했습니다!' : '';
});
</script>
<template>
  <div>
    <input v-model="searchText" placeholder="검색어 입력" />
  </div>
  <p>{{ warningMessage }}</p>
</template>
