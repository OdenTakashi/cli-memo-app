import { createRouter, createWebHistory } from 'vue-router'
import MemoHome from '../views/MemoHome.vue'

const routes = [
  {
    path: '/',
    name: 'MemoHome',
    component: MemoHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
