<template>
    <div>
        <h1>Vue.js Mixing App</h1>
        <p>Este é um exemplo de aplicação Vue.js que mistura conceitos de componentes, diretivas e eventos.</p>
        <p>Para ver o resultado, clique no botão abaixo:</p>
    </div>
</template>

<script>
import testMixing from './testMixing.vue'

export default {
    mixins: [testMixing],
    created() {
        this.testandosMixings();
    }
}
</script>