import { createRouter, createWebHistory } from 'vue-router';

const Main = () => import('@/views/Main.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    // 경로 목록
    routes: [
        // 메인
        {
            path: '/',
            component: Main,
        }
    ],
});

export default router;