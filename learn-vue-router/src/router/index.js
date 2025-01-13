import PetList from '@/views/PetList.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserList from '@/views/UserList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // { path: '/', redirect: "/users" },
  { path: '/users', component: UserList, alias: "/" },
  { path: '/pets', component: PetList },
  { path: "/user-detail", component: UserDetail },
  { path: "/:pathMatch(.*)*", redirect: "/" }, //404 Not Found

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
})

export default router
