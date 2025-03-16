<template>
    <div> 
      Feito por: {{ fullName }}
    </div>
    <br> <br> <br> <br>


    <h1>Tarefas não feitas</h1>
    <div 
      v-for="fazer in listaincompletas" 
      :key="fazer.id"
    >
    <input type="checkbox" v-model='fazer.completed' name="" id="">{{ fazer.title }}

      {{ fazer.title }} - <span id="incompletas">{{ fazer.completed }}</span>
    </div>






    <br>
      <h1>tarefas feitas</h1>
    <div 
      v-for="fazer in listacompletas" 
      :key="fazer.id"
    >
    <input type="checkbox" v-model='fazer.completed' name="" id="">{{ fazer.title }}
      {{ fazer.title }} - <span id="completas">{{ fazer.completed }}</span>
    </div>

      <br> <br>



      

  </template>
  
<script>
  export default {
    data() {
      return {
          user: {
            firstName: 'Eduardo',
            lastName: 'Damasceno'
          },
          listaParaFazer: [
            {
              "userId": 1,
              "id": 1,
              "title": "delectus aut autem",
              "completed": false
            },
            {
              "userId": 1,
              "id": 2,
              "title": "quis ut nam facilis et officia qui",
              "completed": false
            },
            {
              "userId": 1,
              "id": 3,
              "title": "fugiat veniam minus",
              "completed": false
            },
            {
              "userId": 1,
              "id": 4,
              "title": "et porro tempora",
              "completed": true
            },
            {
              "userId": 1,
              "id": 5,
              "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
              "completed": false
            },
            {
              "userId": 1,
              "id": 6,
              "title": "qui ullam ratione quibusdam voluptatem quia omnis",
              "completed": false
            },
            {
              "userId": 1,
              "id": 7,
              "title": "illo expedita consequatur quia in",
              "completed": false
            },
            {
              "userId": 1,
              "id": 8,
              "title": "quo adipisci enim quam ut ab",
              "completed": true
            },
            {
              "userId": 1,
              "id": 9,
              "title": "molestiae perspiciatis ipsa",
              "completed": false
            },
            {
              "userId": 1,
              "id": 10,
              "title": "illo est ratione doloremque quia maiores aut",
              "completed": true
            },
          ]
      };
    },
    computed: {
      fullName () {
        return `${this.user.firstName} ${this.user.lastName}`
      },
      listaincompletas (){
        return this.listaParaFazer.filter(listaParaFazer => !listaParaFazer.completed)
      },
      listacompletas (){
        return this.listaParaFazer.filter(listaParaFazer => listaParaFazer.completed)
      }
    }
  };
  </script>

<style>
*{
  text-align: left;
}
div{
  margin-top: 1em;

}
#incompletas{
  color: red;
}
#completas{
  color: green;
}
</style>