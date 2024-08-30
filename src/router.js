import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppTravel from './pages/AppTravel.vue';
import DayOne from './pages/DayOne.vue';
import DayTwo from './pages/DayTwo.vue';
import DayThree from './pages/DayThree.vue';
import DayFour from './pages/DayFour.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/my-travel',
            name: 'my-travel',
            component: AppTravel
        },
        {
            path: '/day-one',
            name: 'day-one',
            component: DayOne
        },
        {
            path: '/day-two',
            name: 'day-two',
            component: DayTwo
        },
        {
            path: '/day-three',
            name: 'day-three',
            component: DayThree
        },
        {
            path: '/day-four',
            name: 'day-four',
            component: DayFour
        },
    ]
});
export { router };