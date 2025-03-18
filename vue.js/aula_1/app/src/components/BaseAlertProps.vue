<template>
    <div :class="classeAlert">
      {{ value }}
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
  }

};
</script>

<style scoped>
.alerta {
  text-align: left;
  background-color: burlywood;
  font-size: 1.6em;
  max-width: 320px;
  padding: 2em;
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