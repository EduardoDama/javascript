<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <hooksApp v-if="ShowApp"/>
  <button @click="ShowApp = !ShowApp">Mostrar APP</button>
</template>

<script>
import { ref } from 'vue';
import hooksApp from './components/hooksApp.vue'

export default {
  name: 'App',
  components: {
    hooksApp
  },
  setup() {
    const ShowApp = ref(true)
    return {
      ShowApp
    }
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
