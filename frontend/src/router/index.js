import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/pages/Index.vue'),
    },
    // 게시글 상세 보기 라우트 (CommunityGrid.vue 클릭 시 이동)
    {
      path: '/community/:category/:id',
      name: 'PostDetail',
      component: () => import('@/components/ui/PostDetail.vue'),
      props: true,
    },
    // 커뮤니티 보드 목록 (카테고리 옵션)
    {
      path: '/community/:category?',
      name: 'CommunityBoard',
      component: () => import('@/components/ui/CommunityGrid.vue'),
      props: route => ({ category: route.params.category })
    },
    {
      path: '/honeymall',
      component: () => import('@/components/ui/HoneyMallGrid.vue'),
    },
    {
      path: '/bank',
      component: () => import('@/components/ui/BankGrid.vue'),
    },
    {
      path: '/member',
      component: () => import('@/components/ui/MemberGrid.vue'),
    },
    {
      path: '/login',
      component: () => import('@/components/ui/Login.vue'),
    },
    {
      path: '/chatbot',
      component: () => import('@/components/ui/Chatbot.vue'),
    },
    {
      path: '/mypage',
      component: () => import('@/components/ui/MyPageGrid.vue'),
    },
    {
      path: '/register',
      component: () => import('../components/ui/Register.vue'),
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
});

export default router;
