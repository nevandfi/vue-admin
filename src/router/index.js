import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Enter',
        component: () => import('@layouts/NoLayout.vue'),
        children: [
            {
                path: '',
                name: 'EnterLogin',
                component: () => import('@pages/enter/index.vue'),
            },
            {
                path: '',
                name: 'EnterRegister',
                component: () => import('@pages/enter/register.vue'),
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@layouts/DashboardLayout.vue'),
        children: [
            {
                path: '',
                name: 'DashboardHome',
                component: () => import('@pages/dashboard/index.vue'),
            },
            {
                path: 'about',
                name: 'DashboardAbout',
                component: () => import('@pages/dashboard/about.vue')
            },
        ]
    }
];

const Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default Router;