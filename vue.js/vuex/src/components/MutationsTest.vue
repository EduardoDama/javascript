<template>
    <div>
      <input type="text" v-model="first_name" placeholder="Primeiro nome"> <br>
      <input type="text" v-model="last_name" placeholder="Último nome"> <br>
      <input type="text" v-model="email" placeholder="E-mail"><br>
      <button @click="EnviarDados()">Enviar dados</button>
    </div>
    <div>
    <h1>{{ $store.state.user.first_name }} {{ $store.state.user.last_name }}</h1>
    <h2>{{ $store.state.user.email }}</h2>
    </div>
 
  </template>
  
  <script>
  export default {
    name: 'StateTest',
    data() {
      return {
        fist_name: '',
        last_name: '',
        email: '',
        $store: this.$store
      }
    },
    methods: {
        EnviarDados() {
            //this.$store.commit('storeUser', {
                //first_name: this.first_name,
                //last_name: this.last_name,
                //email: this.email
           // })
           this.$store.dispatch('storeUser', {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email
            }).then(() => {
                console.log('Usuário armazenado com sucesso!');
            });

        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  