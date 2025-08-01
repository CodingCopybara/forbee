import { createRouter, createWebHashHistory } from 'vue-router';

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
      path: '/chatbot',
      component: () => import('../components/ui/Chatbot.vue'),
    },
    {
      path: '/mypage',
      component: () => import('../components/ui/MyPageGrid.vue'),
    },
    {
      path: '/member/disease',
      component: () => import('../components/vo/MemberDisease.vue'),
    },
    {
      path: '/member/bloom',
      component: () => import('../components/vo/MemberBloom.vue'),
    },
    {
      path: '/member/env',
      component: () => import('../components/vo/MemberEnv.vue'),
    },
  ],
})

export default router;
