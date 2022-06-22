<template>
  <div
    class="product px-4 md:px-10 md:mb-32 md:grid md:grid-cols-2 md:gap-10 mt-5 lg:mt-16"
  >
    <div class="product__image flex justify-center">
      <img
        :src="activeImage"
        alt="Product Image"
        class="w-auto h-40 md:h-96 lg:h-[500px]"
      />
    </div>

    <div class="product__detail">
      <p class="product__detail__name mt-4 md:mt-0 font-semibold text-2xl">
        {{ activeName }}
      </p>

      <p class="product__detail__description mt-5 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
        repellendus labore facere deleniti minima provident quas esse,
        voluptatum veritatis voluptate error similique atque quo, quisquam modi
        eius, iusto aperiam? Dolor.
      </p>

      <p class="product__detail__price my-3 font-medium text-3xl">
        {{ formatCurrency("en-us", 20 * productQuantity, "NGN") }}
      </p>

      <div class="colour flex justify-between">
        <div class="flex items-center gap-1">
          <p>Colour</p>
          <div class="colours" v-for="(i, idx) in 3" :key="idx">
            <div
              class="w-4 h-4 rounded-full"
              :class="
                idx === 0
                  ? 'bg-blue-500'
                  : idx === 1
                  ? 'bg-green-500'
                  : 'bg-yellow-500'
              "
            ></div>
          </div>
        </div>

        <div class="flex items-center gap-1">
          <p>Size</p>
          <select name="" id="" class="text-sm border outline-none">
            <option value="">XS</option>
            <option value="">X</option>
            <option value="">XL</option>
          </select>
        </div>
      </div>

      <div class="actions my-5 flex justify-between items-center">
        <div class="quantity flex items-center gap-2">
          <i class="fa fa-minus cursor-pointer" @click="decreaseQuantity"></i>
          <p class="quantity__number mx-3 px-3 py-1 border rounded-lg">
            <span> {{ productQuantity }} </span>
          </p>
          <i class="fa fa-plus cursor-pointer" @click="increaseQuantity"></i>
        </div>

        <button
          class="border p-2 font-medium hover:bg-black hover:text-white cursor-pointer hover:border-none"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import router from "../router";
import { formatCurrency } from "../utils/helpers";

export default defineComponent({
  name: "ProductDetails",

  props: {
    product: {
      type: Object,
      // required: true,
      required: false,
    },
  },

  setup() {
    onMounted(async () => {
      // await productsStore.actions.getProductCategory(categoryName.toString());
      routeParam.value;
      getProduct();
    });

    const routeParam = ref(router.currentRoute.value.params.productId);

    const activeData = ref<any>([]);

    const activeName = ref("");

    const activeImage = ref("");

    const edu = "Education";

    const eduImage =
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

    const sports = "Sports";

    const sportsImage =
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60";

    const fashion = "Fashion";

    const fashionImage =
      "https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

    const women = "Women";

    const womenImage =
      "https://images.unsplash.com/photo-1598554889165-8139a49f2883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

    const tech = "Tech";

    const techImage =
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

    const random = "Random";

    const randomImage = "https://picsum.photos/200";

    const productQuantity = ref(1);

    const getProduct = () => {
      if (routeParam.value === "education") {
        activeName.value = edu;
        activeImage.value = eduImage;
        // activeData.value = [...eduData];
      } else if (routeParam.value === "sports") {
        activeName.value = sports;
        activeImage.value = sportsImage;
        // activeData.value = [...sportsData];
      } else if (routeParam.value === "fashion") {
        activeName.value = fashion;
        activeImage.value = fashionImage;
        // activeData.value = [...fashionData];
      } else if (routeParam.value === "women") {
        activeName.value = women;
        activeImage.value = womenImage;
        // activeData.value = [...womenData];
      } else if (routeParam.value === "tech") {
        activeName.value = tech;
        activeImage.value = techImage;
        // activeData.value = [...techData];
      } else {
        activeName.value = random;
        activeImage.value = randomImage;
        // activeData.value = [...randomData];
      }
    };

    const increaseQuantity = () => {
      productQuantity.value++;
    };

    const decreaseQuantity = () => {
      if (productQuantity.value > 1) productQuantity.value--;
    };

    return {
      formatCurrency,
      activeName,
      activeImage,
      productQuantity,
      increaseQuantity,
      decreaseQuantity,
    };
  },
});
</script>

<style scoped></style>
