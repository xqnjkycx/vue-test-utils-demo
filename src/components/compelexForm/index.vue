<template>
  <form @submit.prevent="submit" data-test="form">
    <input type="email" v-model="form.email" data-test="email" />

    <textarea v-model="form.description" data-test="description" />

    <select v-model="form.city" data-test="city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <input type="checkbox" v-model="form.subscribe" data-test="subscribe" />

    <input type="radio" value="weekly" v-model="form.interval" />
    <input
      type="radio"
      value="monthly"
      v-model="form.interval"
      data-test="monthly"
    />

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const emits = defineEmits(["submit"]);

const form = reactive({
  email: "",
  description: "",
  city: "",
  subscribe: false,
  interval: "",
});

async function submit() {
  emits("submit", form);
}
</script>
