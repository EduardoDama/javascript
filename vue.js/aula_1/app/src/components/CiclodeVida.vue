<template>
  <TheHeader v-if="header"/>
<h1>Teste do lifeCicle</h1>
<div> Nome: 
  {{ name }}
</div>

<button @click="header = !header">
  Desativar ou ativar o header
</button>

<input type="text" v-model="name">
</template>

<script>
import TheHeader from './TheHeader.vue';

export default {
  name: 'App',
  components: { TheHeader },
  data() {
    
    return {
      name: "Eduardo Damasceno",
      header: true,
    };
  },
  beforeCreate() {
    console.log('Antes de criar')
    console.log('acesso a propriedade: ', this.name)
    console.log('acesso ao DOM: ', this.$el)    
  },
  created () {
    console.log('Criado')
    console.log('acesso a propriedade: ', this.name)
    console.log('acesso ao DOM: ', this.$el)
    
  },
  beforeMount () {
    console.log('Antes de montar')
    console.log('acesso a propriedade: ', this.name)
    console.log('acesso ao DOM: ', this.$el)
    
  },
  mounted () {
    console.log('Montado')
    console.log('acesso a propriedade: ', this.name)
    console.log('acesso ao DOM: ', this.$el)
    
  },
  beforeUpdate () {
    console.log('Antes de atualizar')
    
  },
  updated () {
    console.log('Atualizado!')

  },
  beforeUnmount () {
    console.log('Antes de desmomntar')
    console.log('acesso a propriedade: ', this.name)
    console.log('acesso ao DOM: ', this.$el)
    
  },
  unmounted () {
    console.log('Desmontado')
    console.log('acesso a propriedade: ', this.name)
    console.log('acesso ao DOM: ', this.$el)

  },
  watch: {

    
  },
  methods: {

    
  },
  computed: {
    
  }
};
</script>

<style>

</style>