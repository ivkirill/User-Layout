<template>
  <div id="app">
    <div class="block-menu">
      <router-link class="btn btn-link" :to="{ name: 'auth'}" exact>Страница входа</router-link>
      <router-link class="btn btn-link" :to="{ name: 'users' }" exact>Список пользователей</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;  
}

.block-menu {
  margin-bottom: 20px;
}

.block-menu .btn {
  display: inline-block;
  margin: 0 10px 0 0 ;
  background-color: #bbb;
  text-decoration: none;
  padding: 10px;
  color: #fff;
}

.block-menu .btn.router-link-active {
  background-color: #777;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
}
</style>
