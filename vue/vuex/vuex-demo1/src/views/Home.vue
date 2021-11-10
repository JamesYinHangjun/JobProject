<template>
  <div class="home">
    111111
    {{$store.state.str}}
    <hr>
    {{str}}
    <hr/>
    <!-- getters -->
    {{setStr}}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['str']),
    ...mapGetters(['setStr'])
  }
}
</script>
