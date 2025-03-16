<template>
    <div> <!-- Elemento raiz único -->

      <button type="button" @click.once="clicou">Clique em MIM</button>

      <form action="#" @submit.stop="onSubmit">
        <input  placeholder="Digite seu nome" v-model="name" @keyup.enter="mandar()">
        <button type="submit">
          Enviar relatório
        </button>
      </form>
      
      <div @mouseover="mousePorCima">
        passe aqui
      </div>

      <p>{{ name }}</p>


  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        esporte: "",
        nota: "0",
        contrato: "",
        cores: [],
      };
    },
    methods: {
      clicou() {
        console.log('Clicou')
      },
      mousePorCima(){
        console.log('O mouse passou aqui')
      },
      onSubmit() {
        console.log('Relatório mandado')
      },
      mandar() {
        console.log('Tecla enter pressionada')
      }
    }
  };
  </script>