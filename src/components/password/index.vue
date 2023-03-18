<template>
  <div>
    <input type="text" v-model="password" />
    <div v-if="errorComputed">{{ errorComputed }}</div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  minLength: {
    type: Number,
  },
});

const password = ref("");

const errorComputed = computed(() => {
  if (password.value.length < props.minLength) {
    return `Password must be at least ${props.minLength} characters`;
  }
  return;
});
</script>
