import Router from 'vue-router'
import Vue from 'vue'
import AllProducts from './pages/AllProducts.vue'
import ProductCategory from './pages/ProductCategory.vue';
import ProductPage from './pages/ProductPage.vue';
import MainPage from './pages/MainPage.vue';


Vue.use(Router)
export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage,
            children: [
                {
                    path: '',
                    name: 'AllProducts',
                    component: AllProducts,
                },
                {
                    path: '/type:type',
                    name: 'typeProduct',
                    component: ProductCategory
                },
                {
                    path: '/:id',
                    name: 'productPage',
                    component: ProductPage
                },
            ]
            
        },
    ]
})