import { createRouter, createWebHistory } from 'vue-router';
// createRouter 라우터 구성 객체
// createWebHistory URL 관리
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  // 라우트 구성 객체
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 정적 등록 방법
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      // 동적 등록 방법
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },

    // 동적 경로 매칭
    {
      // '/user/mike'
      //  '/user/:id'   => /john/1
      // '/:user/:id    => /mypage/setting, /product/list
      // path: '/user/mike',
      // path: '/user/:id',
      // name: 'userMike',

      path: '/user/info',
      name: 'user',
      component: () => import('../views/UserInfo.vue'),
    },
    {
      path: '/user/:id/profile',
      name: 'user',
      component: () => import('../views/UserInfo.vue'),
    },
    {
      path: '/:user/:id',
      name: 'user',
      component: () => import('../views/UserView.vue'),
    },
  ],
});
export default router;
