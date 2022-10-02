import { createRouter, createWebHistory } from 'vue-router'
import MemoEdit from '../views/MemoEdit.vue'

const routes = [
  {
    path: '/edit',
    name: 'edit',
    component: MemoEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
