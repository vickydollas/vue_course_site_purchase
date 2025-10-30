import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue'
import NotFound from '../views/NotFound.vue'
import JobsDetails from '../views/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'job-Detail',
    component: JobsDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
