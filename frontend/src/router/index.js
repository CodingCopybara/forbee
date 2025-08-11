import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/pages/Index.vue'),
    },
    // 커뮤니티 1) 글쓰기
    {
      path: '/community/:category/write',
      name: 'CommunityWrite',
      component: () => import('../components/ui/CommunityWrite.vue'),
      props: true,
    },
    // 커뮤니티 2) 상세 보기
    {
      path: '/community/:category/:id(\\d+)',
      name: 'PostDetail',
      component: () => import('../components/ui/PostDetail.vue'),
      props: true,
    },
    // 커뮤니티 3) 게시판 목록
    {
      path: '/community/:category?',
      name: 'CommunityBoard',
      component: () => import('../components/ui/CommunityGrid.vue'),
      props: route => ({ category: route.params.category })
    },
    { 
      path:'/community/:category/:id/edit',
      name:'CommunityPostEdit',  
      component: () => import('../components/ui/PostEdit.vue'),

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
      path: '/chatbot_ai',
      component: () => import('@/components/ui/Chatbot.vue'),
    },
    {
      path: '/mypage',
      component: () => import('@/components/ui/MyPage.vue'),
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
    {
      path: '/ai',
      component: () => import('../components/ui/ImageAnalysis.vue'),
    },
  ],
});

export default router;
