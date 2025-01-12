import PetList from '@/views/PetList.vue'
import UserList from '@/views/UserList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/users', component: UserList },
  { path: '/pets', component: PetList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
})

export default router
