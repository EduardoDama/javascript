<template>

  <mixingApp 

  />

 
</template>

<script>

import mixingApp from '@/components/mixingApp.vue';

export default {
  name: 'App',
  components: {
    mixingApp
  },
  data(){
    return{
      showAlert: true,
      resposta: 'success',
      msg: ""
    }
  },
  methods: {
    close () {
      this.showAlert = false
      console.log('Fechando!')
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
  margin-top: 20px;
  margin-left: 2em;

}
</style>
