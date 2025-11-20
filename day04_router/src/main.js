// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// web.xml과 비슷한 역할
// 라우터 인스턴스 사용 등록
const app = createApp(App);
app.use(router);

createApp(App).mount('#app');
