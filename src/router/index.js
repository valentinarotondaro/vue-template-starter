import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('@/views/RecipesView.vue'),
    },
    {
      path: '/recipes/:slug',
      name: 'recipe-detail',
      component: () => import('@/views/RecipeDetailView.vue'),
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/QuizView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router