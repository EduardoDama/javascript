<template>
<main>
  <VisorView :resultado="valorSerMostrado"></VisorView>
  <TecladoView @teclaPressionada="teclado"></TecladoView>
</main>
</template>
 
<script>
import VisorView from './VisorView.vue'
import TecladoView from './TecladoView.vue'
import { evaluate } from 'mathjs';

export default {
  name: 'CalculadoraApp',
  data() {
    return {
      valorSerMostrado: '',
    }
  },
  components: {
    VisorView,
    TecladoView
  },
  methods: {
    teclado(tecla) {
      
      if (tecla === '=') {
        this.calcular()
      } else if (tecla === "C") {
        this.valorSerMostrado = this.valorSerMostrado.slice(0, -1)
      }else if (tecla === "√") {
        this.valorSerMostrado = evaluate(`sqrt(${this.valorSerMostrado})`).toFixed(2).replace(/\.00$/, '')
      }else if (tecla === "x²") {
        this.valorSerMostrado = evaluate(`pow(${this.valorSerMostrado}, 2)`).toFixed(2).replace(/\.00$/, '')
      }else if (tecla === "÷"){
        this.valorSerMostrado = this.valorSerMostrado.replace(/÷/g, '/')
      }else{
        this.valorSerMostrado += String(tecla)
      }
    },
    calcular() {
      try{
        this.valorSerMostrado = this.valorSerMostrado.replace(/÷/g, '/')
        this.valorSerMostrado = evaluate(this.valorSerMostrado).toFixed(2).replace(/\.00$/, '')
      } catch (error) {
        this.valorSerMostrado = 'Inválido'
      }

    }
  },
}

</script>

<style>
body {
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
margin: 0;
}

#app {
  background-color: #212529;
  width: 30em;
  padding: 2em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}
</style>

