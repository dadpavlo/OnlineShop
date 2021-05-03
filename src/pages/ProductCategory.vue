<template>
    <div class="page">
        <div class="content">
            <div class="products">
                <p>{{getCategoryProducts[0].type}}</p>
            </div>
            <div class="all__products">
                <product-item
                v-for="product in getCategoryProducts" :key="product.id"
                :product = "product"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductItem from '../components/ProductItem.vue';
export default {
    components: {
        ProductItem
    },
    async mounted() {
       await this.$store.dispatch('fetchProducts')
       await this.categoryProducts(this.$route.params.type)
    }, 
    methods: {
        ...mapMutations(['categoryProducts'])
    },
    computed: {
        ...mapGetters(['getCategoryProducts'])
    },
    watch: {
    '$route.params.type': {
        immediate: true,
        async handler() {
        await this.$store.dispatch('fetchProducts')
        await this.categoryProducts(this.$route.params.type)
        },
    },
    },
}
</script>

<style  scoped>

.page {
    background-color: rgba(245, 245, 245, 1);
    width: 100%;
    min-height: 100vh;
    min-height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

}
.all__products {
    display: grid;  
    grid-template-rows:  auto; /* 3 строки */
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
