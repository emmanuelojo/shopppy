<template>
  <div class="flex justify-center w-[90vw] md:w-[70vw]">
    <div class="w-full md:w-96 px-3 py-4 grid gap-4">
      <p class="uppercase text-2xl font-semibold">Sign in</p>
      <input
        type="text"
        placeholder="username"
        class="py-2 pl-1 bg-transparent text-n-black placeholder:text-n-gray placeholder:pl-1 border border-n-black outline-none"
      />
      <input
        type="password"
        placeholder="password"
        class="py-2 pl-1 bg-transparent text-n-black placeholder:text-n-gray placeholder:pl-1 border border-n-black outline-none"
      />
      <p
        @click="handleLogin"
        class="uppercase bg-green-800 text-white px-8 py-3 w-fit cursor-pointer"
      >
        Login
      </p>
      <p class="uppercase underline text-xs cursor-pointer">
        do not remember password?
      </p>

      <router-link :to="{ name: 'Register' }"
        ><p class="uppercase underline text-xs">
          create a new account
        </p></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import router from "../router";
import authStore from "../store/authStore";

export default defineComponent({
  name: "Login",
  setup() {
    onMounted(() => {
      changeBg();
    });

    onUnmounted(() => {
      changeBg();
    });

    const changeBg = () => {
      authStore.mutations.setBgColour(false);
    };

    const handleLogin = () => {
      router.push("/");
    };

    return { handleLogin };
  },
});
</script>
