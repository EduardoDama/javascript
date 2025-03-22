<template>
  <div>
    <h1>Teste no State do VUEX</h1>
    <h1>{{ $store.state.user.first_name }} {{ $store.state.user.last_name }}</h1>
    <h2>{{ $store.state.user.email }}</h2>
  </div>
</template>

<script>
export default {
  name: 'StateTest',
  data() {
    return {
      $store: this.$store
    }
  },
  created() {
    //console.log(this.$store.state.user.first_name)
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
