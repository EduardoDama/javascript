<template>
  <div></div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'hooksApp',

  setup() {
    onMounted(() => {
      console.log('Montado o componente')
    })

    onUnmounted(() => {
      console.log('Desmontado o componente')
    })
    return {

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
