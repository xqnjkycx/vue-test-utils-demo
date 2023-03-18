<template>
  <div>
    <input type="emial" v-model="email" data-test="input" @blur="handleBlur" />
    <button @click="submit" data-test="submit-btn">Submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const emit = defineEmits(["submit", "focus-lost"]);

function submit() {
  emit("submit", email.value);
}

function handleBlur(event) {
  if (event.relatedTarget.tagName === "BUTTON") {
    emit("focus-lost");
  }
}
</script>
