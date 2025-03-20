<template>
    <div>
        Usuário {{ $route.query.name}}
    </div> <br> <br> 
    <div>
        Fazer login <br>
        <button @click="login()">Login</button>
        <br> <br>
        <button @click="voltar()">Voltar</button>

    </div>
</template>
<script>
export default {
    methods: {
        login() {
            this.$router.push('/contact')
        },
        voltar() {
            this.$router.back()
        }
    }
}
</script>