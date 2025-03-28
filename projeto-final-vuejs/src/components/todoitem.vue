<template>
    <div class="bg-gray-300 rounded-sm">
        <div class="bg-gray-900 flex items-center px-4 py-3 rounded-[5px] 
        ">
            <div class=" flex items-center justify-center 
            mr-2">
                <button :class="todoCompleted" @click="fazerTodo">
                    <svg class="w-5 h-5" fill="none" 
                    stroke="currentColor" viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" 
                    stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>

            <div class="w-full">
                <input
                    type="text"
                    placeholder="Digite a sua tarefa"
                    :value="todolist.title"
                    @keypress.enter="atualizarMessage"
                    class="bg-gray-900 placeholder-gray-500 p-1
                text-neutral-100 font-light focus:bg-gray-800 block w-full appearance-none 
                leading-normal mr-3"
                >
            </div>
            <div class="ml-auto flex items-center 
            justify-center">
                <button 
               @click="deletar" 
               class="focus:outline-none">
                    <svg
                        class="ml-3 h-4 w-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 7L18.1327 19.1425C18.0579 
                            20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 
                            19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 
                            3 9 3.44772 9 4V7M4 7H20"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodosStore } from '@/stores/todosStore'

const todosStore = useTodosStore()

const fazerTodo = (() => {
    todosStore.updateTodo(
        {
            id: props.todolist.id,
            data: {
                title: props.todolist.title,
                completed: !props.todolist.completed
            }
        }
    )
})

const atualizarMessage = ((value) => {
    if (value.target.value.trim() !== ""){
        todosStore.updateTodo(
            {
                id: props.todolist.id,
                data: {
                    title: value.target.value,
                    completed: props.todolist.completed
                }
            }
        )
    }
})

const todoCompleted = computed(() => {
    return props.todolist.completed ?  "text-green-600" : "text-gray-400"; 
})

const deletar = (() => {
    todosStore.deleteTodo(props.todolist.id)
})

const props = defineProps({
  todolist: {
    type: Object,
    required: true
  },
});

</script>