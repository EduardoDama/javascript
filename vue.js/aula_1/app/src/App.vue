<template>

  <VueRouter 
    v-if="showAlert"
    :variant="resposta"
    :value="resposta === 'fail' ? 'Formulário não foi mandado' : 'formulário enviado com sucesso'" 
    @close="close()" 
  />

 
</template>

<script>

import VueRouter from '@/components/VueRouter.vue';

export default {
  name: 'App',
  components: {
    VueRouter
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
