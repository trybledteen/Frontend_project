import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Favorites from '@/views/Favorites.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router