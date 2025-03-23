<template>
<div>
  <input type="text" 
      v-model="horas" 
      maxlength="2" 
      inputmode="numeric" 
      pattern="[0-9]{2}"> <span>:</span>

  <input type="numeric" 
  v-model="minutos"
  maxlength="2" 
  inputmode="numeric" 
  pattern="[0-9]{2}"> <span>:</span>

  <input type="text" 
  v-model="segundos"
  maxlength="2" 
  inputmode="numeric" 
  pattern="[0-9]{2}"> 

  <input type="numeric" 
  id="mili"
  v-model="milissegundos"
  maxlength="3" 
  inputmode="numeric" 
  pattern="[0-9]{3}">
  {{ totalsegundos }}
</div>

<div id="botoes">
  <button id="start" @click="start">start</button>
  <button id="stop" @click="stop">stop</button>
  <button id="reset" @click="reset">reset</button>
  <button id="cheia" @click="cheia">cheia</button>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() { 
    return {
      horas: 0,          
      minutos: 0,        
      segundos: 0,  
      milissegundos: 0,     
      totalsegundos: 0,  
      intervaloID: null, 
    }
  },

  methods: {
    start() {
      if (this.intervaloID) return;

        this.totalMilissegundos = 
        this.horas * 3600 * 1000 + 
        this.minutos * 60 * 1000 + 
        this.segundos * 1000 + 
        this.milissegundos;

      this.ultimoUpdate = Date.now(); 

      this.intervaloID = setInterval(() => {
        const agora = Date.now();
        const decorrido = agora - this.ultimoUpdate;
        this.ultimoUpdate = agora;

        this.totalMilissegundos -= decorrido;

        if (this.totalMilissegundos <= 0) {
          this.totalMilissegundos = 0;
          this.stop();
        }

        this.horas = Math.floor(this.totalMilissegundos / (3600 * 1000));
        this.minutos = Math.floor((this.totalMilissegundos % (3600 * 1000)) / (60 * 1000));
        this.segundos = Math.floor((this.totalMilissegundos % (60 * 1000)) / 1000);
        this.milissegundos = this.totalMilissegundos % 1000;
      }, 10);
    },

    stop() {
      clearInterval(this.intervaloID);
      this.intervaloID = null;
    },
    
    reset() {
      this.stop();
      this.horas = 0;
      this.minutos = 0;
      this.segundos = 0;
      this.milissegundos = 0;
      this.totalsegundos = 0;
    },
    cheia() {
      document.documentElement.requestFullscreen()
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    }
  },
}
</script>

<style scoped>
span{
  font-size: 10em;
  color: red;
}

input{
  width:2em;

  padding: 5px;
  font-size: 10em;
  text-align: center;
  border-style: none;
  margin: 5px;
  border-radius: 0.2em;
}
input#mili{
  width: 2em;
  font-size: 6em;
  border: none;

}
button{
  width: 4em;
  height: 4em;
  font-size: 1em;
  margin: 5px;
  border-radius: 50%;
  border: none;
  background-color: #f0f0f0;
}
button:hover{
  cursor: pointer;
  box-shadow: inset 0px 2px 9px rgba(0, 0, 0, 0.5);

}
button:active{
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  transform: scale(0.9);
}
#botoes{
  margin-top: 2em;
  display: flex;
  justify-content: center;
}
#start{
  background-color: green;
  color: white;
}
#stop{
  background-color: red;
  color: white;
}
#reset{
  background-color: blue;
  color: white;
}
#cheia{
  background-color: yellow;
  color: black;
}
</style>
