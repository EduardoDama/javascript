<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <SpinnerView v-if="loading"/>
      <TodoForm />
      <TodoItems />
      <TodoEmpty v-if="todosStore.$state.todo.length === 0"/>
    </div>

    <div>
    </div>
  </div>
</template>

<script setup>
import SpinnerView from './components/SpinnerView.vue'
import TodoForm from './components/TodoForm.vue'
import TodoItems from './components/TodoItems.vue'
import TodoEmpty from './components/TodoEmpty.vue'
import { ref, onMounted, computed } from 'vue'
import { useTodosStore } from '@/stores/todosStore'

const todosStore = useTodosStore()

const loading = ref(false)

onMounted(() => {
  loading.value = true
  todosStore.getTodo()
  loading.value = false
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
