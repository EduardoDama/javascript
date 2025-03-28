<template>
    <!-- Todo form -->
    <form class="flex items-center px-4 bg-gray-900 h-15 
rounded-sm border-l-2 border-green-400 mb-3">
    <input
        v-model="titulo"
        placeholder="Adicione um novo item ..."
        type="text"
        class="bg-gray-900 placeholder-gray-500 text-gray-500 
font-light focus:outline-none block w-full appearance-none leading-normal 
py-3 pr-3"
    >
    <button
    @click="submeter"
    @keypress.enter="submeter"
        class="text-green-400 text-xs font-semibold 
focus:outline-none"
        type="submit"
    >
        ADICIONAR
    </button>
</form>
<!--/ Todo form -->
</template>

<script setup>
    import { useTodosStore } from '@/stores/todosStore'
    import { ref, onMounted } from 'vue'

    const todosStore = useTodosStore()

    const titulo = ref('')


    const submeter = (() => {
        console.log("Clicou em submeter")
        if (titulo.value.trim() !== ""){
            todosStore.sendTodo(
                {
                    title: titulo.value,
                    completed: false
                }
            )
            titulo.value = ''
        }
    })

</script>