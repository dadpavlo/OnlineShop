<template>
    <div class="page">
        <div class="content">
            <div class="products">
                <p>ВСЕ ТОВАРЫ</p>
            </div>
            <div class="all__products">
                <div class="loader" v-if="!isLoad"></div>
                <product-item v-else
                v-for="product in getProducts" :key="product.id"
                :product = "product"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from '../components/ProductItem.vue';
export default {
    components: {
        ProductItem
    },
    data() {
        return {
            isLoad: false
        }
    },
    async created() {
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
.loader {
  margin: 6em auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
