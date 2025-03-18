<template>
    <header id="header">
        Eduardo BONITÃO
    </header>
    <div v-for="(name, index) in listNames" v-bind:key="name">
    O usuário número {{ index + 1 }} o nome é {{ name }}
  </div>

  <h1 :style="styleH1" >Aprendendo VUE.JS</h1>
</template>

<script>
export default{
    data(){
        return{
        listNames: ["Eduardo", "Macaco", "Girafa", "Fernando", "Margarida"],
        titulo: false,
        styleH1: { color: "black", backgroundColor: "red" }
        }    
    },
    mounted () {
        window.addEventListener('resize', this.redimencionar)
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
        window.removeEventListener('resize', this.redimencionar)
    },
    methods: {
        redimencionar (evento) {
            console.log(evento)
        }
    }
}
</script>

<style>
    .grande{
        font-size: 5em;
    }
    .titulo{
        font-size: 3em;
        text-align: left;
        color: red;
    }
    #header{
        font-size: 2em;
        color: red; 
        background-color: black;
    }
    div{
        margin-top: 2em;
        text-align: left;
    }
</style>
