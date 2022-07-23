<script setup lang="ts">
import { onMounted, ref } from "vue";
import authStore from "./store/authStore";
// This starter template is using Vue 3 <script setup> SFCs

onMounted(() => {
  bgStatus.value;
});

const bgStatus = ref(authStore.getters.bgStatus);
</script>

<template>
  <div
    class="h-screen overflow-y-auto"
    :class="bgStatus ? 'bg-white' : 'bg-green-300'"
  >
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@300&display=swap");

#app {
  font-family: "Urbanist";
}
body {
  margin: 0;
  padding: 0;
}
</style>
