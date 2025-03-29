import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage/index.vue'
import Screen2 from '../views/Screen2/index.vue'
import Quiz from '../views/Quiz/index.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/screen2', component: Screen2},
    {path: '/quiz', component: Quiz}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;