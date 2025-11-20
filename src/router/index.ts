import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: () => import('../views/IndexPage.vue')
    },
    {
      path: '/old/xterm',
      name: 'XtermPage',
      component: () => import('../views/old/XTermPage.vue')
    }
  ],
})

export default router