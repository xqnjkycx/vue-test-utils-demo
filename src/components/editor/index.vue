<template>
  <div>
    <input type="text" :value="modelValue" @input="handleInput" />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(["update:modelValue"]);

function handleInput(event) {
  emits("update:modelValue", event.target.value);
}
</script>
