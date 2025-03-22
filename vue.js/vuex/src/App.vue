<template>
  <MutationsTest />
</template>

<script>
import MutationsTest from './components/MutationsTest.vue';


export default {
  name: 'App',
  components: {
    MutationsTest
  },
  data() {
    return {
      $store: this.$store
    }
  },
  created() {
    //console.log(this.$store.state.user.first_name)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
