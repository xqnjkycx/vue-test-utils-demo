<template>
  <div>
    <FakeChild />
  </div>
</template>

<script setup>
import { provide } from "vue";
import FakeChild from "./fakeChild.vue";

provide: {
  fakaKey: "fakeValue";
}
</script>
