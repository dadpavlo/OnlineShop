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
        numberOfCategories: 1
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
            let AllCategory = []
            let type = []
            let finalType = []
            let itWas = true
            type.push(state.products[0].type)
            finalType.push(state.products[0].type)
            for (let i = 0; i < state.products.length; i++) {
                AllCategory.push(state.products[i].type)
            }
            console.log(AllCategory);
            for (let i = 0; i < AllCategory.length; i++) {
                console.log('AllCategory[i]', AllCategory[i]);
                for (let j = 0; j < type.length; j++) {
                    console.log('type[j]', type[j]);
                    if (AllCategory[i] != type[j]) {
                        itWas = false
                    } else (
                        itWas = true
                    )
                }
                if (itWas == false) {
                    console.log(AllCategory[i], 'добавлен');
                    finalType.push(AllCategory[i])
                    state.numberOfCategories++
                }
            }
            console.log(finalType);
            console.log(state.numberOfCategories);
            state.productCategory = finalType
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProductCategory(state) {
            return state.productCategory
        }
    }
}