<template>
  <div class="top-products">
    <div class="product mb-5 relative" v-for="product in 7" :key="product">
      <div class="product__image flex justify-center">
        <img src="../assets/logo.png" alt="productTitle" />
      </div>

      <div class="icons absolute top-1/2 left-1/3 flex gap-5">
        <div
          class="icon bg-gray-200 hover:bg-red-200 hover:text-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
        >
          <i class="fa fa-shopping-cart"></i>
        </div>

        <div
          class="icon bg-gray-200 hover:bg-red-200 hover:text-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
          @click="goToProduct(product)"
        >
          <i class="fa fa-search"></i>
        </div>

        <div
          class="icon bg-gray-200 hover:bg-red-200 hover:text-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
        >
          <i class="fa fa-heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import router from "../router";
import productsStore from "../store/productsStore";

export default defineComponent({
  name: "Products",

  emits: ["product"],

  setup(_, { emit }) {
    onMounted(async () => {
      await productsStore.actions.getProducts();
    });

    const products = productsStore.getters.products;

    const goToProduct = (item: any) => {
      router.push(`/products/${item._id}`);
      // console.log({ item });
      emit("product", item);
    };

    return {
      products,
      goToProduct,
    };
  },
});
</script>

<style scoped>
/* .top-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  justify-content: center;
  padding: 1.5rem;

  .product {
    position: relative;
    width: 300px;
    height: 350px;
    display: grid;
    justify-content: center;
    align-items: center;
    // margin: 0.125rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    background: rgb(224, 240, 247);
    opacity: 1;

    @media screen and (max-width: 31.25rem) {
      margin-top: 0.5rem;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.3);
      //   background-color: blue;
      opacity: 0.7;
      .icons {
        display: grid;
      }
    }

    &__image {
      width: 80%;
      height: 80%;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .icons {
      position: absolute;
      top: 50%;
      left: 35%;
      //   right: 50%;
      display: none;
      grid-template-columns: repeat(3, auto);
      gap: 1rem;

      .icon {
        background-color: #fff;
        padding: 0.25rem 0.5rem;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;

        i {
          //   margin-left: 0.5rem;
        }

        &:hover {
          cursor: pointer;
          background-color: gray;
          transition: all 0.3s ease;

          i {
            color: red;
          }
        }
      }
    }
  }
} */
</style>
