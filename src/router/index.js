import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase.js';


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
          path: 'signup',
          meta: { title: 'register' },
          name: 'signup',
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
      path: '/',
      meta: { requiresAuth: true },
      component: () => import('../template/TemplateDash.vue'),
      children: [
        {
          path: 'dashboard',
          meta: { title: 'Dashboard' },
          name: 'dashboard',
          component: () => import('../views/dash/HomeView.vue')
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

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  if (to.matched.some(record => record.meta.requiresAuth) && !currentUser) {
    next('/login');
  } else {
    next();
  }
});


export default router
