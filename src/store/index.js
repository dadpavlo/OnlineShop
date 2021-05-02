import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/Products'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)


export default new Vuex.Store({
    modules: {
        products,
    }

})