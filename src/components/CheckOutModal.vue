<template>
  <div>
    <teleport to="#checkout">
      <div>
        <transition name="slide" mode="out-in" appear>
          <div
            class="w-fit h-16 fixed top-1 right-0 translate grid justify-center items-center opacity-100 z-30 bg-white"
          >
            <div class="relative flex items-center">
              <div class="bg-green-500 absolute left-0 h-16 w-1"></div>
              <div class="px-4 flex items-center gap-5">
                <div
                  class="border border-green-500 rounded-full w-7 h-7 flex justify-center items-center"
                >
                  <i class="fa fa-check text-green-500"></i>
                </div>

                <p class="text-sm font-medium">Checkout Successful</p>
              </div>
            </div>
            <!-- <div class="toast bg-green-300 px-10"> -->
          </div>
        </transition>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckOutModal",
});
</script>

<style>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
</style>
