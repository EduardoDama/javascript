<template>
  <h1>Cronômetro</h1>
  <Cronometro />
</template>

<script>
import Cronometro from './components/CronometroView.vue'

export default {
  name: 'App',
  components: {
    Cronometro
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
body{
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-family: "Roboto", sans-serif;
}
h1{
  margin-top: 2em;
  color: white;
  font-size: 4em;
  margin-bottom: 1em;
  text-align: center;
}
</style>
