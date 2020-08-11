import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Builder from '@/components/pages/Builder.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/builder', name: 'builder', component: Builder }
];

const router = new VueRouter({
    routes
});

export default router;
