import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../views/Home.vue'


import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

import User from '@/views/User.vue';
import Profile from '@/views/Profile.vue';
import DetailBook from '@/views/DetailBook.vue';
import SearchPage from '@/views/SearchPage.vue';






const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', name: 'home', component: Home },

            { path: '/login', name: 'login', component: Login },
            { path: '/register', name: 'register', component: Register },
            { path: '/user', name: 'user', component: User },
            { path: '/profile', name: 'profile', component: Profile },
            { path: '/book/:id', name: 'DetailBook', component: DetailBook },
            { path: '/search', name: 'SearchPage', component: SearchPage },

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 