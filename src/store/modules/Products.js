import axios from 'axios'
export default {
    actions: {
        async fetchProducts({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
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
                    }, 1000)
                }
            )
        }
    },
    state: {
        products: [],
        productCategory: [],
        numberOfCategories: 1,
        categoryProducts: [],
        getElementById: []

    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
            let AllCategory = []
            let type = []
            let finalType = []
            let itWas = true
            type.push(state.products[0].type)
            for (let i = 0; i < state.products.length; i++) {
                AllCategory.push(state.products[i].type)
            }
            for (let i = 0; i < state.products.length; i++) {
                for (let j = 0; j < type.length; j++) {
                    if (state.products[i].type != type[j]) {
                        itWas = false
                    } else (
                        itWas = true
                    )
                }
                if (itWas == false) {
                    let category = {
                        type: state.products[i].type,
                        category: state.products[i].category
                    }
                    finalType.push(category)
                    state.numberOfCategories++
                }
            }
            let category = {
                type: state.products[0].type,
                category: state.products[0].category
            }
            finalType.push(category)
            state.productCategory = finalType
        },
        categoryProducts(state, category) {
            let arr = []
            for (let i = 0; i < state.products.length; i++) {
                if(state.products[i].category == category) {
                    console.log('state.products[i].type', state.products[i].category);
                    arr.push(state.products[i])
                }
                
            }
            state.categoryProducts = arr
        },
        elementById(state, id) {
            this.dispatch('fetchProducts')
            console.log(state.products);
            console.log('elementById');
            console.log(id);
            let arr = []
            for (let i = 0; i < state.products.length; i++) {
                if(state.products[i].id == id) {
                    arr = state.products[i]
                }
                
            }
            console.log(arr);
            state.getElementById = arr
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProductCategory(state) {
            return state.productCategory
        },
        getCategoryProducts(state) {
            return state.categoryProducts
        },
        getElementById(state) {
            return state.getElementById
        }
    }
}