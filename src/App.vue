<template>
  <div id="app">
    <Menu/>
    <all-products/>
  </div>
</template>

<script>
import AllProducts from './pages/AllProducts.vue';
import Menu from './components/Menu.vue';


export default {
  name: 'App',
  components: {
    AllProducts,
    Menu
  },
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
p {
  margin: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,400;1,500;1,700;1,900&display=swap');
</style>
