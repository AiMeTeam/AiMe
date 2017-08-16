<template>
  <div id="app">
    <router-view></router-view>
    <!-- content 的文件夹 我放的是除过head的内容 -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./common/css/reset.css"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
