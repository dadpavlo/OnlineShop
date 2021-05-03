<template>
    <div class="page">
        <loader v-if="!isLoad"/>
        <div class="content" v-else>
            <div class="img">
                <img :src = "progectImage" :alt = "progectImage" >
            </div>
            <div class="product">
                <div class="name">
                    <p>{{getElementById.name}}</p>
                </div>
                <div class="brand">
                    <p>Бренд: {{getElementById.brand}}</p>
                </div>
                <div class="price__with__discount" v-if="isSale">
                    <div class="price__without__discount">
                        <p>{{getElementById.price}} руб.</p>
                    </div>
                    <div class="final__price">
                        <p>{{finalPrice}} руб.</p>
                    </div>
                </div>
                <div class="price" v-else></div>
                <div class="add__to__cart">
                    <button><p>Добавить в корзину</p></button>
                </div>
                <div class="about">
                    <p class="type">О товаре:</p>
                    <div class="about__item">
                        <p class="type">Пол</p><p class="product_type">: {{getElementById.gender}}</p>
                    </div>
                    <div class="about__item">
                        <p class="type">Цвет</p><p class="product_type">: {{getElementById.color}}</p>
                    </div>
                    <div class="about__item">
                        <p class="type">Материал</p><p class="product_type">: {{getElementById.material}}</p>
                    </div>
                    <div class="about__item">
                        <p class="type">Модель</p><p class="product_type">: {{getElementById.type}}</p>
                    </div>
                    <div class="about__item">
                        <p class="type">Сезон</p><p class="product_type">: {{getElementById.season}}</p>
                    </div>
                    <div class="about__item">
                        <p class="type">Артикул</p><p class="product_type">: {{getElementById.id}}</p>
                    </div>
                    <div class="about__item">
                        <p class="type">Страна-производитель</p><p class="product_type">: {{getElementById.country}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import Loader from '../components/Loader.vue'

export default {
    components: {
        Loader
    },
    methods: {
        ...mapMutations(['elementById']),
        sale() {
            this.finalPrice = 0
            if(this.getElementById.discount != 0) {
                this.isSale = true
                this.finalPrice = this.getElementById.price - (this.getElementById.price / 100) * this.getElementById.discount
            }
        }
    },
    computed: {
        ...mapGetters(['getElementById']),
    }, 
    data() {
        return {
            progectImage: "",
            finalPrice: 0,
            isSale: false,
            isLoad: false
        }
    },
    watch: {
    '$route.params.id': {
        immediate: true,
        async handler() {
            this.isLoad = false
            await this.$store.dispatch('fetchProducts')
            await this.elementById(this.$route.params.id)
            await this.sale()
            const fileName = this.getElementById.img
            this.progectImage = require(`../assets/${fileName}.png`)
            this.isLoad = true
        },
        
    },
}
}
</script>
<style scoped>
.page {
    background-color: rgba(245, 245, 245, 1);
    width: 100%;
    min-height: 100vh;
    display: flex;

    justify-content: center;

}
.content {
    display: flex;
    margin-top: 68px;
    width: 75.7%;
}
img {
    max-height: 538px;
}
.name {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #3C3C3C;
}
.brand {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    margin-top: 16px;
    display: flex;
    align-items: center;

    color: #3C3C3C;

}
.price__without__discount {
    margin-top: 31px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: lowercase;
    text-decoration: line-through;
    color: #868686;
}
.final__price {
    margin-top: 7px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    display: flex;
    align-items: center;

    color: #B61118;
}
button {
    margin-top: 61px;
    background: #D32F2F;
    border-radius: 2px;
    border: none;
    outline: none;
}
.add__to__cart p{
    padding: 7px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.16px;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #FFFFFF;

}
.about__item {
    display: flex;
}
.about {
    margin-top: 81px;
}
.about__item{
    margin-top: 20px;
}
.type{
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #3C3C3C;

}
.img {
    margin-right: 40px;
}
</style>
