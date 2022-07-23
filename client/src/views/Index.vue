<template>
  <div class="index-page">
    <Slider />
    <ProductCategories />
    <TopProducts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slider from "../components/Slider.vue";
import ProductCategories from "./ProductCategories.vue";
import TopProducts from "./TopProducts.vue";

export default defineComponent({
  name: "Index",
  components: { Slider, ProductCategories, TopProducts },
});
</script>
