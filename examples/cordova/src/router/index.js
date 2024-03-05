import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/signin/index.vue')
  },

  {
    path: '/',
    component: Layout,
    redirect: '/chat',
    children: [
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/chat/index.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/contact/index.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@/views/me/index.vue')
      }
    ]
  },

  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error-page/not-found.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
