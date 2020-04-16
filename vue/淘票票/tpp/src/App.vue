<template>
  <div id="app">
    <v-fixnav></v-fixnav>
    <router-view/>
  </div>
</template>

<script>
import fixNav from '@/components/fixNav/fixNav'
export default {
  name: 'App',
  components: {
      'v-fixnav': fixNav
  }
}
</script>

<style>

</style>
