<template>
    <div>
        {{ produto.id }}  {{ produto.nome }} - R$ {{ produto.preco }}
        <br> <br>
        <button @click="AdicionarProduto()">
            Adicionar ao carrinho
        </button>
    </div>
</template>
<script>
    export default {
        name: 'AppProduto',
        data() {
            return {
                $store: this.$store
            }
        },
        props: {
            produto: Object,
        },
        methods: {
            AdicionarProduto() {
                this.$store.commit('AdicionarCarrinho', this.produto)
            }
        }
    }
</script>
<style>
*{
    text-align: left;
    margin-bottom: 2em;
}
</style>