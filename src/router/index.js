import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () => import('../views/Authorview.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/post/_id.vue')
  },
  {
    path: '/author/:id',
    name: 'Author',
    component: () => import('../views/author/_id.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  if(from.name) {
    document.documentElement.scrollTop = 0
  }
})

export default router
