<script setup>
import { reactive, watch, onMounted, onBeforeUnmount } from 'vue';
// 1. 기본 자료형 속성 count에 값 0을 할당하여 reactive() 반응형 데이터로 만들어라

const state = reactive({ count: 0, isRunning: false });

// 반응형 데이터를 콜백 함수 형태로 사용한 인자로 watch()에게 넘겨주기
watch(
  () => state.count,
  (currentValue, preValue) => {
    console.log(currentValue, preValue);
  }
);
let timer = null;

// 타이머 시작
const startTimer = () => {
  if (state.isRunning) return; // 중복 시작 방지

  state.isRunning = true;
  timer = setInterval(() => {
    state.count++;
  }, 100);
};

// 타이머 정지
const stopTimer = () => {
  clearInterval(timer);
  timer = null;
  state.isRunning = false;
};
// 숫자 초기화
const resetCount = () => {
  stopTimer(); // 타이머가 실행 중이면 정지
  state.count = 0;
};

onMounted(() => {
  startTimer(); // 처음 화면 뜰 때 자동 시작
});
onBeforeUnmount(() => {
  stopTimer(); // 컴포넌트가 사라질 때 정리
});
</script>

<template>
  <h1>reactive : {{ state.count }}</h1>
  <button @click="state.count++">수동 증가</button>
  <button @click="startTimer" :disabled="state.isRunning">자동 증가</button>
  <button @click="stopTimer" :disabled="!state.isRunning">
    자동 증가 정지
  </button>
  <button @click="resetCount">초기화</button>
</template>
