import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ClownList',
    name: 'ClownList',
    component: () => import('../views/ClownList.vue')
  },
  {
    path: '/PlanningBase',
    name: 'PlanningBase',
    component: () => import('../views/PlanningBase.vue')
  },
  {
    path: '/PlanningTest',
    name: 'PlanningTest',
    component: () => import('../views/PlanningTest.vue')
  },
  {
    path: '/EditTest',
    name: 'EditTest',
    component: () => import('../views/EditTest.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
