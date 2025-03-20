<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>caraca meu nobre</p>
    <button @click="ir()">Ir para a próxima</button>
    <button @click="voltar()">Voltar para a página anterior</button>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  methods: {
    ir() {
      this.$router.forward()
    },
    voltar() {
      this.$router.back()
    }
  }
}
</script>
