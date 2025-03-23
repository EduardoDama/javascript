<template>
    <div class="teclado">
      <button v-for="tecla in teclas" :id="'tcl' + tecla" :key="tecla"  class="tecla" @click="teclaPressionada(tecla)">
        {{ tecla }}
      </button>
    </div>
</template>
  
<script>
export default {
name: 'TecladoView',
data() {
    return {
    teclas: ['7', '8', '9', 'C', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '÷', '+','=', '√', 'x²']
    }
},
created() {
    window.addEventListener('keydown', this.Botaopressionado)
},
methods: {
    teclaPressionada(tecla) {
        this.$emit('teclaPressionada', tecla)
    },
    Botaopressionado(event){
        if (this.teclas.includes(event.key)){
            this.$emit('teclaPressionada', event.key)
        } else if (event.key === 'Enter'){
            this.$emit('teclaPressionada', '=')
        } else if (event.key === 'Backspace'){
            this.$emit('teclaPressionada', 'C')
        } else if (event.key === '/'){
            this.$emit('teclaPressionada', '÷')
        } else if (event.key === 'x'){
            this.$emit('teclaPressionada', 'x²')
        } else if (event.key === 'r'){
            this.$emit('teclaPressionada', '√')
        }
        
    }
},
}
</script>
  
<style>
button[id="tcl="] {
    background-color: #ff9500; 
    grid-column: span 2;
}

button#tcl\+,
button#tcl√,
button#tclx²,
button#tcl\-,
button#tcl\*,
button#tcl\÷ {
    background-color: #3460c0;
}

button#tclC {
    background-color: #f32217;  
}

.teclado {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    height: 75%;
    margin-top: 2em;
}

.tecla {
    background-color: #495057;
    color: #ffffff;
    font-size: 1.5em;
    border: none;
    border-radius: 0.5em;
    padding: 0.5em;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transition: background-color 0.2s ease;
}

.tecla:hover {
    background-color: #6c757d;
}

.tecla:active {
    background-color: #adb5bd;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>