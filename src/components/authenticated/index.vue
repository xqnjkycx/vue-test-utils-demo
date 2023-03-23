<template>
  <button @click="redirect" data-test="button">Click to Edit</button>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  isAuthenticated: String,
});

const redirect = () => {
  if (props.isAuthenticated) {
    router.push(`/posts/${route.params.id}/edit`);
  } else {
    router.push("/404");
  }
};
</script>
