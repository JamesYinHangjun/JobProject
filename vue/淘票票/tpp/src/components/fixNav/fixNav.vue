<template>
    <nav>
        <ul>
            <li><router-link to="/"><i></i>电影</router-link></li>
            <li><router-link to="/cinema"><i></i>影院</router-link></li>
            <li><router-link to="/mys"><i></i>我的</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
    nav ul{
        display: flex;
    }

    nav ul li {
        
    }
</style>
