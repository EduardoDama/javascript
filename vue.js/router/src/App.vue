<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="linkAbout">About</router-link> |
    <router-link :to="linkContact">Contact</router-link> |
    <router-link to="/user/23">Usuário</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    data () {
      return{
        linkAbout: '/about',
        linkContact: '/contact'
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  font-size:1em;
}
nav a {
  color: gray;
  font-size: 1em;
}
</style>
