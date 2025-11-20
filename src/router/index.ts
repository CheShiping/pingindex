import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: {}
    },
    {
      path: '/old/xterm',
      name: 'XtermPage',
      component: {}
    }
  ],
})

export default router
