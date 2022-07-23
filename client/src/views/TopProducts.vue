<template>
  <div class="px-4 mt-10">
    <p class="mb-10 text-xl uppercase text-center font-semibold">
      top products
    </p>
    <div
      class="top-products md:mx-10 grid md:grid-cols-2 lg:grid-cols-auto md:gap-4"
    >
      <div
        class="product h-60 mb-5 cursor-pointer"
        v-for="(product, idx) in topProducts"
        :key="idx"
      >
        <div class="product__image w-full lg:w-100 h-60 flex justify-center">
          <img
            :src="product.image"
            :alt="product + ' Image'"
            class="w-full lg:w-100 h-60 object-cover"
          />
        </div>

        <div class="icons flex justify-center items-center gap-5">
          <div
            class="icon bg-gray-200 hover:bg-green-400 hover:text-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
          >
            <i class="fa fa-shopping-cart"></i>
          </div>

          <div
            class="icon bg-gray-200 hover:bg-green-400 hover:text-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
            @click="goToProduct(product)"
          >
            <i class="fa fa-search"></i>
          </div>

          <div
            class="icon bg-gray-200 hover:bg-green-400 hover:text-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
          >
            <i class="fa fa-heart"></i>
          </div>
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
  name: "TopProducts",

  emits: ["product"],

  setup(_, { emit }) {
    onMounted(async () => {
      await productsStore.actions.getProducts();
    });

    const products = productsStore.getters.products;

    const topProducts = [
      {
        id: 1,
        name: "Shirt Style",
        image:
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        background: "red",
        link: "/products/fashion",
      },
      {
        id: 2,
        name: "Footwears",
        image:
          "https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?b=1&k=20&m=1308274455&s=170667a&w=0&h=S3UYmEJ1hUri2rB8jRhJ4wNY31lMrHysLHbl9YD8j_Q=",
        background: "brown",
        link: "/products/fashion",
      },
      {
        id: 3,
        name: "Light Jacket",
        image:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        background: "orange",
        link: "/products/fashion",
      },
      {
        id: 4,
        name: "New Dresses",
        image:
          "https://media.istockphoto.com/photos/summer-brown-polka-dot-sleeveless-dress-suede-sandals-leather-bag-picture-id1235611009?b=1&k=20&m=1235611009&s=170667a&w=0&h=QBq35PqT-mMKLSjCjz8IEvVyhrtl7uKp9pT6BPNoak8=",
        background: "pink",
        link: "/products/women",
      },
      {
        id: 5,
        name: "Jeans",
        image:
          "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        background: "gray",
        link: "/products/fashion",
      },
      {
        id: 6,
        name: "MacBook",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        background: "gray",
        link: "/products/tech",
      },
    ];

    const goToProduct = (item: any) => {
      router.push(`${item.link}`);
      // console.log({ item });
      emit("product", item);
    };

    return {
      topProducts,
      products,
      goToProduct,
    };
  },
});
</script>

<style scoped>
.product {
  position: relative;
}

.product:hover .icons {
  display: flex;
}

.icons {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s ease-in-out;
  transition-duration: 1s;
}

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
