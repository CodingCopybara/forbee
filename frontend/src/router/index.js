import { createRouter, createWebHashHistory } from 'vue-router';
import Chatbot from '@/components/ui/Chatbot.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/Index.vue'),
    },
    {
      path: '/community',
      component: () => import('../components/ui/CommunityGrid.vue'),
    },
    {
      path: '/honeymall',
      component: () => import('../components/ui/HoneyMallGrid.vue'),
    },
    {
      path: '/bank',
      component: () => import('../components/ui/BankGrid.vue'),
    },
    {
      path: '/member',
      component: () => import('../components/ui/MemberGrid.vue'),
    },
    {
      path: '/login',
      component: () => import('../components/ui/Login.vue'),
    },
    {
      path: '/chatbots',
      component: () => import('../components/ui/Chatbot.vue'),
    },
    {
      path: '/mypage',
      component: () => import('../components/ui/MyPageGrid.vue'),
    },
    {
      path: '/register',
      component: () => import('../components/ui/Register.vue'),
    },
  ],
})

export default router;
