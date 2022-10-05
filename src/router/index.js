import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Personnal from '../views/Personnal.vue'
import Skills from '../views/Skills.vue'
import Experience from '../views/Experience.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/personnal',
    name: 'personnal',
    component: Personnal
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
