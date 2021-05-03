<template>
  <header>
      <div id = "menu" class = "menu" v-if="isLoad">
          <div class="content">
              <p class="category" @click="$router.push({name: 'AllProducts'})">Все товары</p>
              <CategoryItem
              v-for = "category in getProductCategory" :key="category.id"
              :category = "category"
              />
          </div>
      </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryItem from './CategoryItem';

export default {
    name: 'Menu',
    components: {
      CategoryItem
    },
    data() {
        return {
            isLoad: false
        }
    },
    async mounted() {
        await this.$store.dispatch('fetchProducts')
        this.isLoad = true
    },
    computed: {
      ...mapGetters(['getProductCategory'])
  }
}
</script>

<style scoped>
.menu {
    width: 100%;
    height: 44px;
    background-color:rgba(255, 255, 255, 1);
    display: flex;

}
.content {
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    margin-left: 11%;
    display: flex;
    min-width: 17.8%;
    justify-content: space-between;
}
.category {
    padding: 5px;
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: center;
    cursor: pointer;
    flex-grow: 1;
    transition-duration: 300ms;
}
.category:hover {
    background-color: rgba(245, 245, 245, 1);
}

</style>