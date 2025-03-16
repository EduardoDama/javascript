<template>

  <ComputedProperties></ComputedProperties>

 
</template>

<script>

import ComputedProperties from './components/ComputedProperties.vue';

export default {
  name: 'App',
  components: {
    ComputedProperties
  },
  data(){

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
  margin-top: 20px;
  margin-left: 2em;

}
</style>
