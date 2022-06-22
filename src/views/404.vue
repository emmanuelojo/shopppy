<template>
  <div class="container h-screen flex flex-col justify-center items-center">
    <h1 class="text-n-purple text-5xl font-bold">404: Page not found</h1>
    <div class="mt-10 flex justify-center p-4">
      <router-link to="/" class="text-n-purple font-medium underline"
        >Go Home</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
});
</script>

<style></style>
