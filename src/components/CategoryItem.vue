<template>
    <div class="category__item">
        <p class="category">{{category}}</p>
    </div>
</template>

<script>

export default {
    props: {
        category: String
    }
}
</script>

<style>
.category__item {
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
