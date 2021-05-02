import axios from 'axios'
export default {
    actions: {
        async fetchProducts({commit}) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:3000/products')
                    .then(response => {
                        commit("updateProducts", response.data);
                        console.log(response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
                }
            )
        }
    },
    state: {
        products: []
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        }
    }
}