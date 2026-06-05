import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Item1Page from '@/views/Item1Page.vue'
import Item2Page from '@/views/Item2Page.vue'
import Item3Page from '@/views/Item3Page.vue'
import Item4Page from '@/views/Item4Page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/item-1',
    name: 'Item1',
    component: Item1Page,
  },
  {
    path: '/item-2',
    name: 'Item2',
    component: Item2Page,
  },
  {
    path: '/item-3',
    name: 'Item3',
    component: Item3Page,
  },
  {
    path: '/item-4',
    name: 'Item4',
    component: Item4Page,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
