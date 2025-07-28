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
      path: '/maps',
      component: () => import('../components/MapView.vue'),
    },
    {
      path: '/chatbots',
      component: () => import('../components/ui/ChatbotGrid.vue'),
    },
  ],
})

export default router;
