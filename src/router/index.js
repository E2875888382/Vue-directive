import Vue from 'vue'
import VueRouter from 'vue-router'
import Permission from '../views/Permission.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Permission
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/visible',
        name: 'visible',
        component: () => import('../views/Visible.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
