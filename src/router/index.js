import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'root', redirect: { path: '/home' } },

    {
      path: '/',
      component: () => import('../template/TemplatePublic.vue'),
      children: [
        {
          path: 'home',
          meta: { title: 'Home' },
          name: 'home',
          component: () => import('../views/HomeView.vue')
        }
      ]
    }, {
      path: '/',
      component: () => import('../template/TemplateRegister.vue'),
      children: [
        {
          path: 'register',
          meta: { title: 'register' },
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue')
        },
        {
          path: 'login',
          meta: { title: 'login' },
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        }
      ]
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    },
  ],
})

export default router
