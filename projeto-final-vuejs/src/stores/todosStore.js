import { defineStore } from "pinia";
import axios from 'axios'

export const useTodosStore  = defineStore("todos", {
  state: () => ({
    todo: []
  }),
  getters: {

  },
  actions: {
    addTodo(value) {
      this.todo = value
      console.log(this.todo)
    },
    getTodo() {
      axios.get('http://localhost:3000/todos').then((response) => {
        this.addTodo(response.data)
      })
    },
    sendTodo(data) {
      axios.post('http://localhost:3000/todos', data).then(() => {
        this.getTodo()
      })
    },
    updateTodo({id, data}) {
      console.log(id, data)
      axios.put(`http://localhost:3000/todos/${id}`, data).then(() => {
        this.getTodo()
      })
    },
    deleteTodo(id) {
      console.log(id)
      axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        this.getTodo()
      })
    },    
  }
});