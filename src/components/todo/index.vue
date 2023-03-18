<template>
  <div
    data-test="todo"
    v-for="todo in todos"
    :key="todo.id"
    :class="[todo.completed ? 'completed' : '']"
  >
    <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
    {{ todo.text }}
  </div>
  <input data-test="new-todo" v-model="newTodo" type="text" />
  <button data-test="submit-btn" @click="createTodo"></button>
</template>

<script setup>
import { reactive, ref } from "vue";
const todos = reactive([
  {
    id: 1,
    text: "Learn Vue.js 3",
    completed: false,
  },
]);
const newTodo = ref();

function createTodo() {
  todos.push({
    id: 2,
    text: newTodo.value,
    completed: false,
  });
  console.log(todos);
}
</script>

<style scoped lang="less"></style>
