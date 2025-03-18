<template>
    <div v-if="fechar" :class="classeAlert">
      {{ value }}
      <button @click="fechar">X</button>
    </div>

</template>

<script>

export default {
  name: 'App',
  props: {
    variant: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
  },
  computed: {
    classeAlert () {
      return  [
        'alerta',
        this.variant ? `alerta-${this.variant}` : ""
      ]
    }
  },
  methods: {
    fechar () {
      this.$emit('close')
    }
  }

};
</script>

<style scoped>
button{
  width: 2.2em;
  height: 2.2em;
  border-style: none;
  background-color: white;
}
.alerta {
  display: flex;
  justify-content: space-between;
  text-align: left;
  background-color: burlywood;
  font-size: 1.2em;
  max-width: 400px;
  padding: 1.5em;
  border-radius: 1em;
  box-shadow: 0em 0em 3em rgba(0, 0, 0, 0.479);
}
.alerta-success {
  background-color: rgb(6, 161, 6);
  color: white;

}
.alerta-fail {
  background-color:red;
  color: white;
}
</style>