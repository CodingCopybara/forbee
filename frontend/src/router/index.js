import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/Index.vue'),
    },
    {
      path: '/posts',
      component: () => import('../components/ui/PostGrid.vue'),
    },
    {
      path: '/comments',
      component: () => import('../components/ui/CommentGrid.vue'),
    },
    {
      path: '/plants',
      component: () => import('../components/ui/PlantGrid.vue'),
    },
    {
      path: '/users',
      component: () => import('../components/ui/UserGrid.vue'),
    },
    {
      path: '/memberRequestLists',
      component: () => import('../components/ui/MemberRequestListGrid.vue'),
    },
    {
      path: '/chatbot',
      component: () => import('../components/MapView.vue'),
    },
    {
      path: '/mypage',
      component: () => import('../components/ui/MyPage.vue'),
    },
  ],
})

export default router;
