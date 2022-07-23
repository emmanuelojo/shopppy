<template>
  <div class="home-page">
    <Slider />
    <ProductCategories />
    <div class="my-20">
      <TopProducts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slider from "../components/Slider.vue";
import ProductCategories from "./ProductCategories.vue";
import TopProducts from "./TopProducts.vue";

export default defineComponent({
  name: "Home",
  components: { Slider, ProductCategories, TopProducts },
});
</script>
