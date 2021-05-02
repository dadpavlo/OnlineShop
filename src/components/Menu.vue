<template>
  <header>
      <div id = "menu" class = "menu">
          <div class="content">
              <p class="category">Все товары</p>
              <p class="category">Футболки</p>
              <p class="category">Штаны</p>
          </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  components: {
  }
}
</script>

<style>
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
    width: 17.8%;
    justify-content: space-between;
}
.category {
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