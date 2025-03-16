<template>
  <div> 
     <input type="text" placeholder="Nome completo" v-model="name"> <br>
     {{ name }}
  </div>
<br> <br><br>
  <div> 
     <input type="text" placeholder="Primeiro Nome" v-model="user.primeiroNome"> <br>
  </div>
  <div> 
     <input type="text" placeholder="Último Nome" v-modDel="user.segundoNome"> <br>
     {{ user.primeiroNome }}{{ user.segundoNome }}
  </div>

</template>

<script>
export default {
  data() {
    return {
       name: "",
       user: {
        primeiroNome: "",
        segundoNome: "",
       }
    };
  },
  watch: {
    name(novoValor){
      this.saveNome(novoValor)
    },
    user: {
      handler() {
        console.log('Modificado o usuário!')
      },
      deep: true
    }
  },
  methods: {
    saveNome(novo) {
      console.log(novo)
    }
  },
  computed: {
    
  }
};
</script>

<style>

</style>