<template>
  <div>
  {{ user.nome }}
<br> <br>
  <button @click="mudarNome()"> Mudar de nome</button>
  </div>

  <div> <br> <br>
    <h2>Nome completo</h2> <br>
    {{ nomeCompleto }}

    <br> <br>
    <button @click="sobrenomeMudar">Mudar sobrenome</button>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  name: 'CompositionIntroducao',

  setup() {
    const user = ref({
      nome: "Eduardo",
      sobrenome: "Damasceno",
      idade: 25
    }    )
    const mudarNome = () => {
      console.log('Nome mudado')
      user.value.nome = "MACACO"
    }

    const sobrenomeMudar = () => {
      user.value.sobrenome = "SilveirStallone"
    }

    watch(user, () => {
      alert('Nome mudado')
    }, {deep: true})

    const nomeCompleto =  computed(() => {
      return `${user.value.nome} ${user.value.sobrenome}`
    })
    return {
      user,
      mudarNome,
      nomeCompleto,
      sobrenomeMudar
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
