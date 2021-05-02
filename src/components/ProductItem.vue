<template>
    <div class="product__item">
        <img :src = "Image" :alt = "progectImage" >
        <div class="sale" v-if="isSale">
            <div class="final__price">
                <p>{{finalPrice}} руб.</p>
            </div>
            <div class="price__without__discount">
                <p>{{product.price}} руб.</p>
            </div>
        </div>
        <div class="price" v-else>
            <p>{{product.price}} руб.</p>
        </div>
        <div class="brand">
            <p class="brand">{{product.brand}}</p>
        </div>
        <div class="name">
            <p class="name">{{product.name}}</p>
        </div>
    </div>
</template>
<script>

export default ({
    props: {
        product: Object
    },
    data() {
        return {
            progectImage: "",
            finalPrice: 0,
            isSale: false,
        }
    },
    computed: {
        Image() {
            const fileName = this.product.img
            return require(`../assets/${fileName}.png`);
        }
    },
    methods: {
        sale() {
            if(this.product.discount != 0) {
                this.isSale = true
                this.finalPrice = (this.product.price / 100) * this.product.discount
            }
        }
    },
    async mounted() {
        this.sale()
    }
})
</script>

<style scoped>
.price p{
    cursor: pointer;
    margin: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: lowercase;

    color: #3C3C3C;
}
.product__item {
    margin: 10.5px;
}
img {
    max-width: 256px;
    width: 100%;
    cursor: pointer;
}
.brand {
    margin-top: 2px;
    font-family: Roboto;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.price {
    margin-top: 19px;
}
.name {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    margin-top: 11px;
    color: #000000;
    cursor: pointer;
}
.name p {
    margin: 0;
}
.sale {
    display: flex;
    text-align: center;
}
.final__price {
    margin-top: 19px;
    flex-grow: 1;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: lowercase;

    color: #BA1219;
}
.price__without__discount {
    flex-grow: 1;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    margin-top: 21px;
    display: flex;
    align-items: center;
    text-transform: lowercase;
    color: #868686;
    text-decoration: line-through;
    justify-content: center;
}
</style>
