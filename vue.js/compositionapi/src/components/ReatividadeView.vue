<template>
  <div>
  {{ user.nome }}
<br> <br>
  <button @click="mudarNome()"> Mudar de nome</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CompositionIntroducao',

  setup() {
    const user = ref({
      nome: "Eduardo",
      idade: 25
    }    )
    const mudarNome = () => {
      console.log('Nome mudado')
      user.value.nome = "MACACO"
    }
    return {
      user,
      mudarNome
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
