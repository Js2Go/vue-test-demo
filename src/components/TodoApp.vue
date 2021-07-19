<template>
  <div>
    <div
      v-for="todo in todos"
      :key="`todo-${todo.id}`"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>
    
    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" type="text">
    </form>
  </div>
</template>

<script lang="ts">
interface TodoItem {
  id: number
  text: string
  completed: boolean
}

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TodoApp',
  setup() {
    const newTodo = ref<string>('')
    const todos = ref<Array<TodoItem>>([
      {
        id: 1,
        text: 'Learn Vue.js 3',
        completed: false
      }
    ])

    const createTodo = () => {
      todos.value.push({
        id: 2,
        text: newTodo.value,
        completed: false
      })
    }
  
    return {
      newTodo,
      todos,
      createTodo
    }
  }
})
</script>