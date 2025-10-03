import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import LoginView from '../pages/LoginView.vue'
import AboutView from '../pages/AboutView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/login', component: LoginView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router