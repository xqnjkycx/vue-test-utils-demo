<template>
  <button @click="handleClick" data-test="add-btn">add</button>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const count = ref(0);

const emits = defineEmits(["increment"]);

function handleClick() {
  count.value++;
  emits("increment", count.value);
}
</script>

<style></style>
