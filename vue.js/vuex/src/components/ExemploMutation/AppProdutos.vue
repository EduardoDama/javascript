<template>
    <AppProduto
    v-for="produto in $store.state.produtos" 
    :key="produto.id" 
    :produto="produto"
    />
    <p>
        Total do valor do carrinho: R$ {{ $store.getters.TotalValor }}
    </p>    
    <button @click="VerCarrinho()">
        Ver carrinho
    </button>
    

    <div v-if="mostrarCarrinho">
        <div v-for="produto in $store.state.carrinho" :key="produto.id">
            {{ produto.nome }} - R$ {{ produto.preco }}
            <button @click="RemoverCarrinho(produto)">
                Excluir
            </button>
        </div>
    </div>
    <br> <br> <br> <br>
  </template>
  
  <script>
import AppProduto from './AppProduto.vue';

  export default {
    name: 'StateTest', 
    components: {
        AppProduto
    },
    data() {
      return {
        mostrarCarrinho: false,
        mostrarVerCarrinho: false,
        $store: this.$store
      }
    },
    methods: {
        EnviarDados() { 
            this.mostrarVerCarrinho = true,
            this.$store.commit('storeUser', {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email
            })
           
        },
        VerCarrinho() {
            this.mostrarCarrinho = true;
        },
        RemoverCarrinho(produto) {
            this.$store.commit('RemoverCarrinho', produto)
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  