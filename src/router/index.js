import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Products = () => import('../views/Products.vue')
const Login = () => import('../views/Login.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/login', meta: { layout: 'Login' }, component: Login },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const isAuthenticated = localStorage.getItem('TestAuthToken') || ''
    if (to.path !== '/login' && !isAuthenticated) next({ path: '/login' })
    next()
})


export default router