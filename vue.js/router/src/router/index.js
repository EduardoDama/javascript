import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  { // Primeira página HOME do site, página padrão
    path: '/',
    name: 'home',
    component: HomeView
  },
  { // Página sobre o site que aparecerá substituindo a HOME
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  { // Página de contatos que vai aparecer substituindo
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@/views/UserView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
