import Router from 'vue-router';
import Vue from 'vue';
import AllProducts from './pages/AllProducts.vue';

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'AllProducts',
            component: AllProducts
        }
    ]
})