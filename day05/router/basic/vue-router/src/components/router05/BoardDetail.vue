<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

// router: 페이지 이동용 (목록, 수정 버튼에서 사용)
const router = useRouter();
// route: 현재 URL 정보 읽기용 (글번호 가져오기)
const route = useRoute();

let articleNo = ref(0);

onMounted(() => {
  // route 사용: URL에서 글번호 가져오기
  // 예: /r05/board/view/123 → route.params.no = "123"
  articleNo.value = route.params.no;
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <!-- 가져온 글번호 표시 -->
      <h4 class="card-title">{{ articleNo }}번글 제목</h4>
      <p class="card-text">글 내용이 나와요</p>
      <!-- router 사용: 목록 페이지로 이동 -->
      <button
        type="button"
        @click="router.push({ name: 'board5' })"
        class="btn btn-outline-success btn-sm"
      >
        글목록
      </button>
      <!-- router 사용: 수정 페이지로 이동 (글번호 전달) -->
      <button
        type="button"
        @click="router.push({ name: 'boardmodify5', params: { no: articleNo } })"
        class="btn btn-outline-dark btn-sm ms-2"
      >
        글수정
      </button>
    </div>
  </div>
</template>
<!-- ## 동작 순서 설명

### 1단계: 페이지 접속
```
사용자가 URL 입력: /r05/board/view/123
         ↓
Vue Router가 BoardDetail5 컴포넌트 로드 -->

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
