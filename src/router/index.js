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
        path: '/visible',
        name: 'visible',
        component: () => import('../views/Visible.vue')
    },
    {
        path: '/permission',
        name: 'permission',
        component: () => import('../views/Permission.vue')
    },
    {
        path: '/copy',
        name: 'copy',
        component: () => import('../views/Copy.vue')
    },
    {
        path: '/focus',
        name: 'focus',
        component: () => import('../views/Focus.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
