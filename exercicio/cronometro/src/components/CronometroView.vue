<template>
<div>
  <input type="text" 
      :value="horas" 
      maxlength="2" 
      inputmode="numeric" 
      pattern="[0-9]{2}"> <span>:</span>

  <input type="text" 
  :value="minutos"
  maxlength="2" 
  inputmode="numeric" 
  pattern="[0-9]{2}"
  > <span>:</span>

  <input type="text" 
  :value="segundos"
  maxlength="2" 
  inputmode="numeric" 
  pattern="[0-9]{2}"
  > 

  <input type="text" 
  id="mili"
  :value="milissegundos"
  maxlength="3" 
  inputmode="numeric" 
  pattern="[0-9]{3}"
  >
</div>

<div id="botoes">
  <button id="start">start</button>
  <button id="stop">stop</button>
  <button id="reset">reset</button>
  <button id="cheia">cheia</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      horas: '00',
      minutos: '00',
      segundos: '00',
      milissegundos: '000'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
