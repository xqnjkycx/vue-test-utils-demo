<template>
  <a href="#" data-test="profile">My Profile</a>
  <a href="#" data-test="admin" v-if="admin">Admin</a>
  <a href="#" data-test="visible" v-show="visible">visible</a>
</template>

<script setup>
import { ref } from "vue";

const admin = ref(false);
const visible = ref(false);
</script>

<style scoped lang="less"></style>
