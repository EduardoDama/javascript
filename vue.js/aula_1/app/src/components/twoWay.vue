<template>
    <div> <!-- Elemento raiz único -->
      <label>Nome</label><br>
      <input v-model="name" type="text"><br><br>
  
      <label>Qual é o seu esporte favorito?</label><br>
      <select v-model="esporte">
        <option value="">Escolha</option>
        <option value="Futebol">Futebol</option>
        <option value="basquete">Basquete</option>
        <option value="Tenis">Tenis</option>
        <option value="Fórmula 1">Fórmula 1</option>
        <option value="Volei">Volei</option>
      </select>
  
      <br><br>
  
  
      <p v-if="name && esporte">Seu nome é {{ name }} e seu esporte favorito é {{ esporte }}</p>


      <label>Quanto gostou desse site</label><br><br>
      <div>
        <input v-model="nota" value="1" type="radio"> 1
        <input v-model="nota" value="2" type="radio"> 2
        <input v-model="nota" value="3" type="radio"> 3 
        <input v-model="nota" value="4" type="radio"> 4 
        <input v-model="nota" value="5" type="radio"> 5
        <input v-model="nota" value="6" type="radio"> 6
        <input v-model="nota" value="7" type="radio"> 7
        <input v-model="nota" value="8" type="radio"> 8
        <input v-model="nota" value="9" type="radio"> 9
        <input v-model="nota" value="10" type="radio"> 10
      </div>
      <p v-if="nota <= 2 && nota > 0">o que houve de errado para ser tão ruim?</p>
      <p v-if="nota < 5 && nota > 2">Descupa, o que podemos melhorar?</p>
      <p v-if=" nota >= 5 && nota < 8">Muito obrigado, agradecemos que você gostou!</p>
      <p v-if="nota >= 8">Você amou! Ainda bem :)</p>

        <br>
        <br>
      <label>Contrato</label><br><br>
      <div>
        <input v-model="contrato" value="1" type="checkbox"> Aceita os nossos termos
        <p v-if="contrato">Muito obrigado, seja bem vindo!</p>
        <p v-else>Muito obrigado, desculpe ae por não atender suas espectativas</p>
      </div>

      <br>
      <br>
      <br>
      <label>Cor favorita</label><br><br>
      <div>
        <input v-model="cores" value="Azul" type="checkbox"> Azul
        <input v-model="cores" value="vermelho" type="checkbox"> vermelho
        <input v-model="cores" value="Amarelo" type="checkbox"> Amarelo
        <input v-model="cores" value="Roxo" type="checkbox"> Roxo
        <input v-model="cores" value="Verde" type="checkbox"> Verde
        <input v-model="cores" value="Marrom" type="checkbox"> Marrom
        <input v-model="cores" value="Preto" type="checkbox"> Preto

        <p v-if="cores != []">Sua cor favorita é {{ cores }}</p>
      </div>
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
    }
  };
  </script>