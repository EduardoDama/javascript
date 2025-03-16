<template>

  <OberservadoresVue></OberservadoresVue>

 
</template>

<script>

import OberservadoresVue from './components/OberservadoresVue.vue';

export default {
  name: 'App',
  components: {
    OberservadoresVue
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
