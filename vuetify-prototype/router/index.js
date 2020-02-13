Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: httpVueLoader('components/Home.vue')
    },
]

const router = new VueRouter({
mode: 'history',
routes
})

export default router
