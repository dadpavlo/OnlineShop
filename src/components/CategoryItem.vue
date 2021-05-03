<template>
    <div class="category__item" @click="$router.push({name: 'typeProduct', params: {type: category.category}})" >
        <p class="category">{{category.type}}</p>
    </div>
</template>

<script>

export default {
    props: {
        category: Object
    }
}
</script>

<style scoped>
.category__item {
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
.category__item:hover {
    background-color: rgba(245, 245, 245, 1);
}
</style>
