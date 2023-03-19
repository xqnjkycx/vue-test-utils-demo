<template>
  <button :disabled="loading" @click="getPosts" data-test="postBtn">
    Get Posts
  </button>
  <p v-if="loading" role="alert">Loading your posts...</p>
  <ul v-else>
    <li v-for="post in posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const posts = ref(null);
const loading = ref(false);

async function getPosts() {
  loading.value = true;
  posts.value = await axios.get("/fake/api");
  loading.value = false;
}
</script>
