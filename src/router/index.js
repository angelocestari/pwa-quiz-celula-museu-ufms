import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage/index.vue'
import Screen2 from '../views/Screen2/index.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/screen2', component: Screen2},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;