<template>
  <div class="relative sm:pt-[450px] md:pt-0 h-screen">
    <main class="">
      <div class="flex justify-center mx-auto pt-5">
        <img :src="LogoImage" alt="Logo" class="h-10 w-10 mb-10" />
      </div>

      <div class="mx-3 md:mx-10">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoImage from "../assets/svg/logo.svg";

export default defineComponent({
  name: "OtherLayout",
  setup() {
    return { LogoImage };
  },
});
</script>

<style scoped>
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
