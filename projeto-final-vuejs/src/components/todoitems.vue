<template>
    <div class="space-y-2">
        <todoitem v-for="todo in todosStore.$state.todo" :todolist="todo"/>

    </div>
            <!--/ Todo items -->
</template>

<script setup>
import todoitem from './todoitem.vue';
import { useTodosStore } from '@/stores/todosStore'

const todosStore = useTodosStore()

</script>