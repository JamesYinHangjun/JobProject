<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
        <router-link to="/">Home</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/about">关于</router-link>
    </p>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染到这里 -->
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
