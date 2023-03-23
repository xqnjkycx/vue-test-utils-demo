<template>
  <div>
    <SomeChild />
  </div>
</template>

<script setup>
import { provide } from "vue";
import SomeChild from "../someChild/index.vue";

provide("fakeKey", "fakeValue");
</script>
