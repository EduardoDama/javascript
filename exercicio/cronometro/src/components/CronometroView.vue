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
      horas: String().padStart(2, '0'),          
      minutos:  String().padStart(2, '0'),        
      segundos:  String().padStart(2, '0'),  
      milissegundos:  String().padStart(3, '0'),     
      totalsegundos: 0,  
      intervaloID: null, 
    }
  },
  created() {
    window.addEventListener('keydown', this.Botaopressionado)
  },

  methods: {
    start() {
      if (this.intervaloID) return;
        this.horas = Number(this.horas);
        this.minutos = Number(this.minutos);
        this.segundos = Number(this.segundos);
        this.milissegundos = Number(this.milissegundos);  

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
          this.totalMilissegundos = 30000;
        }

        this.horas = String(Math.floor(this.totalMilissegundos / (3600 * 1000))).padStart(2, '0')
        this.minutos = String(Math.floor((this.totalMilissegundos % (3600 * 1000)) / (60 * 1000))).padStart(2, '0');
        this.segundos = String(Math.floor((this.totalMilissegundos % (60 * 1000)) / 1000)).padStart(2, '0')
        this.milissegundos = String(this.totalMilissegundos % 1000).padStart(3, '0')

 
      }, 10);
    },

    stop() {
      clearInterval(this.intervaloID);
      this.intervaloID = null;
    },
    
    reset() {
      this.stop();
      this.horas = String().padStart(2, '0');
      this.minutos = String().padStart(2, '0');
      this.segundos = String().padStart(2, '0');
      this.milissegundos = String().padStart(3, '0');
      this.totalsegundos = 0;
    },
    cheia() {
      document.documentElement.requestFullscreen()
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    },
    Botaopressionado(event){
      console.log(event.key)
      switch(event.key) {
        case 'Enter':
          this.start()
          break
        case ' ':
          this.stop()
          break
        case 'r':
          this.reset()
          break
        case 'f':
          this.cheia()
          break
      }
    }
  },
}
</script>

<style scoped>
span {
  /* Tamanho responsivo com limites mínimo e máximo */
  font-size: clamp(2rem, 8vw, 10rem);
  color: red;
  /* Espaçamento vertical relativo */
  line-height: 0.8;
}

input {
  width: 3ch;
  max-width: 100%;

  font-size: clamp(3rem, 8vw, 11rem);
  padding: 0.3rem;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 0.3em;
  margin: 0.2rem;

  -webkit-tap-highlight-color: transparent;
}

input#mili {
  /* Ajuste proporcional para milissegundos */
  width: 4ch;
  font-size: clamp(1.5rem, 6vw, 8rem);
  /* Mantendo a proporção com os outros campos */
  margin-bottom: -0.5em;
}

/* Media Queries para ajustes específicos */
@media (max-width: 768px) {
  span {
    font-size: clamp(1.5rem, 6vw, 8rem);
  }
  
  input {
    font-size: clamp(1.5rem, 6vw, 8rem);
    width: 2.5ch;
  }
  
  input#mili {
    font-size: clamp(1rem, 4.5vw, 6rem);
    width: 3.5ch;
  }
}

@media (max-width: 480px) {
  span {
    font-size: clamp(1rem, 5vw, 6rem);
    line-height: 0.7;
  }
  
  input {
    font-size: clamp(1rem, 5vw, 6rem);
    width: 2ch;
    padding: 0.2rem;
  }
  
  input#mili {
    font-size: clamp(0.8rem, 4vw, 5rem);
    width: 3ch;
  }
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
