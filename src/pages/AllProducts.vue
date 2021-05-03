<template>
    <div class="page">
        <loader v-if="!isLoad"/>
        <div class="content" v-else>
            <div class="products">
                <p>ВСЕ ТОВАРЫ</p>
            </div>
            <div class="all__products">
                <product-item
                v-for="product in getProducts" :key="product.id"
                :product = "product"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue'
import { mapGetters } from "vuex"
import ProductItem from '../components/ProductItem.vue'

export default {
    components: {
        ProductItem,
        Loader
    },
    data() {
        return {
            isLoad: false
        }
    },
    
    async created() {
        this.isLoad = false
        await this.$store.dispatch('fetchProducts')
        this.isLoad = true
    }, 
    methods: {
    },
    computed: {
        ...mapGetters(['getProducts'])
    }
}
</script>

<style scoped>

.page {
    background-color: rgba(245, 245, 245, 1);
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}
.all__products {
    display: grid;  
    grid-template-rows:  auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    min-height: 100vh;
}
.products {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-self: flex-start;
    text-transform: uppercase;
    margin: 10.5px;
    color: #000000;
}
.content {
    margin-right: 3px;
    padding-top: 18.5px;
    display: flex;
    width: 75.7%;
    margin: 0;
    max-width: 1100px;
    flex-direction: column;
}
</style>
