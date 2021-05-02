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
        products: [],
        productCategory: [],
        numberOfCategories: 1,
        categoryProducts: []

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
                    console.log('type[j]', type[j]);
                    if (state.products[i].type != type[j]) {
                        itWas = false
                    } else (
                        itWas = true
                    )
                }
                if (itWas == false) {
                    console.log(AllCategory[i], 'добавлен');
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
            console.log(finalType);
            console.log(state.numberOfCategories);
            state.productCategory = finalType
        },
        categoryProducts(state, category) {
            console.log('categoryProducts');
            let arr = []
            console.log('category', category);
            console.log('state.products.length', state.products.length);
            for (let i = 0; i < state.products.length; i++) {
                if(state.products[i].category == category) {
                    console.log('state.products[i].type', state.products[i].category);
                    arr.push(state.products[i])
                }
                
            }
            state.categoryProducts = arr
            console.log('arr', arr);
            console.log('state.categoryProducts', state.categoryProducts);
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
        }
    }
}