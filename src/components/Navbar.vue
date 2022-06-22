<template>
  <nav
    class="flex justify-between items-center py-2 pl-3 pr-5 bg-white shadow-sm"
  >
    <div class="left flex items-center gap-5">
      <select name="" id="" class="hidden md:block border outline-none">
        <option value=""><p>EN</p></option>
        <option value=""><p>ESP</p></option>
        <option value=""><p>FR</p></option>
      </select>

      <div class="search w-fit flex items-center border outline-none">
        <input
          type="text"
          placeholder="Search"
          class="w-24 md:w-full border-none outline-none placeholder:pl-1 placeholder:text-sm focus-within:outline-none pl-2"
        />
        <i class="fa fa-search mr-1 text-gray-300"></i>
      </div>
    </div>

    <div class="">
      <router-link to="/">
        <p class="font-bold text-xl">Shoppy</p>
      </router-link>
    </div>

    <div class="flex items-center gap-2 md:gap-5">
      <router-link :to="{ name: 'Register' }"
        ><p class="text-xxs md:text-sm font-semibold">REGISTER</p></router-link
      >

      <router-link :to="{ name: 'Login' }">
        <p class="text-xxs md:text-sm font-semibold">LOGIN</p>
      </router-link>

      <div class="relative">
        <router-link
          :to="{
            name: 'Cart',
          }"
        >
          <i class="fa fa-shopping-cart"></i>
          <div
            class="absolute -top-1 -right-2 bg-green-400 w-4 h-4 pb-1 px-[6px] rounded-full"
          >
            <p
              class="mt-[1px] flex justify-center items-center text-xxs text-white font-bold"
            >
              3
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </nav>

  <transition v-if="showNotification" name="fade" mode="out-in" appear>
    <div class="bg-green-400 py-2 px-4 relative">
      <p class="flex justify-center text-xs text-white">
        Super Deals. Free Shipping on Orders Over {{ formatCurrency('en-ng', 5000, 'ngn')}}
      </p>

      <div
        @click="showNotification = !showNotification"
        class="absolute top-1 right-2 cursor-pointer text-white"
      >
        <i class="fa fa-times"></i>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { formatCurrency } from "../utils/helpers";

export default defineComponent({
  name: "Navbar",

  setup() {
    const showNotification = ref(true);

    return {
      showNotification,
      formatCurrency
    };
  },
});
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
</style>
