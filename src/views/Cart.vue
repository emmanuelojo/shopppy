<template>
  <div class="cart m-4 md:mx-10">
    <div class="cart-header flex justify-center items-center mb-2">
      <p class="text-2xl">YOUR CART</p>
    </div>
    <div class="cart-container">
      <div class="panel flex justify-between items-center my-0 mx-2">
        <button
          @click="$router.back()"
          class="shopping flex justify-center items-center border py-1 px-2 bg-white"
        >
          <p class="uppercase text-xs md:text-sm font-semibold text-black">
            Continue Shopping
          </p>
        </button>

        <div class="flex justify-center items-center">
          <p class="hidden md:block underline mr-4 text-sm cursor-pointer">
            Shopping Cart (3)
          </p>
          <p class="hidden md:block underline mr-4 text-sm cursor-pointer">
            Your Wishlist (0)
          </p>
        </div>

        <button class="bg-black px-2 py-[6px]">
          <p @click="checkout" class="text-white uppercase text-xs md:text-sm">
            checkout now
          </p>
        </button>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3fr-1.5fr lg:grid-cols-4fr-1.5fr gap-8 mt-8"
      >
        <div class="cart__items">
          <div
            v-for="(item, idx) in cartItems"
            :key="idx"
            class="product grid md:flex md:justify-between md:items-center py-4 pr-0 md:pr-20 mb-5 border-gray-200"
            :class="idx === 3 - 1 ? 'border-none' : 'border-b'"
          >
            <div
              class="product__details grid items-center md:flex md:justify-center"
            >
              <div class="image w-20 h-24 md:mr-4 flex justify-center mx-auto">
                <img
                  :src="item.image"
                  alt="product Title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="mt-4 md:mt-0 grid gap-2">
                <div class="flex w-max">
                  <p class="flex items-center font-semibold">Product:</p>
                  <p class="flex items-center font-normal ml-2 flex-wrap">
                    {{ item.name }}
                  </p>
                </div>

                <div class="flex w-max">
                  <p class="flex items-center font-semibold">ID:</p>
                  <p class="flex items-center font-normal ml-2 flex-wrap">
                    {{ item.id }}
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <p class="flex items-center font-semibold">Colour:</p>
                  <div
                    class="selected-colour bg-green-500 w-4 h-4 rounded-full"
                  ></div>
                </div>

                <div class="flex w-max">
                  <p class="flex items-center font-semibold">Size:</p>
                  <p class="flex items-center font-normal ml-2 flex-wrap">
                    {{ item.size }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="product__quantity mt-8 md:mt-0 grid place-content-center gap-4"
            >
              <div class="flex justify-center items-center">
                <i
                  @click="decreaseQuantity(item.id)"
                  class="fa fa-minus cursor-pointer"
                ></i>
                <p
                  class="quantity__number flex justify-center items-center mx-3"
                >
                  {{ item.quantity }}
                </p>
                <i
                  @click="increaseQuantity(item.id)"
                  class="fa fa-plus cursor-pointer"
                ></i>
              </div>
              <p class="product__amount text-2xl">
                {{
                  formatCurrency("en-ng", item.amount * item.quantity, "NGN")
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="cart__summary border rounded-lg p-4 h-64">
          <p class="text-xl md:text-2xl font-semibold uppercase">
            order summary
          </p>
          <div class="flex justify-between items-center my-4">
            <p class="font-semibold text-[rgba(0,0,0,0.8)]">Subtotal</p>
            <p>{{ formatCurrency("en-ng", subTotal, "NGN") }}</p>
          </div>
          <div class="flex justify-between items-center my-4">
            <p class="font-semibold text-[rgba(0,0,0,0.8)]">
              Estimated Shipping
            </p>
            <p>{{ formatCurrency("en-ng", shippingFee, "NGN") }}</p>
          </div>
          <div class="flex justify-between items-center my-4">
            <p class="font-semibold text-[rgba(0,0,0,0.8)] text-lg">Total</p>
            <p class="text-lg">
              {{ formatCurrency("en-ng", shippingFee + subTotal, "NGN") }}
            </p>
          </div>

          <button class="w-full flex justify-center items-center bg-black p-2">
            <p @click="checkout" class="text-white uppercase">checkout now</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import router from "../router";
import { formatCurrency } from "../utils/helpers";

export default defineComponent({
  name: "Cart",
  setup() {
    const cartItems = ref([
      {
        id: 5643,
        name: "MacBook",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        background: "gray",
        size: "13'",
        amount: 1250,
        quantity: 1,
      },

      {
        id: 43,
        name: "Necklace",
        image:
          "https://media.istockphoto.com/photos/beautiful-girl-wearing-golden-jewerly-a-golden-necklace-and-golden-picture-id1317457980?b=1&k=20&m=1317457980&s=170667a&w=0&h=9_V18Nrx33svfSbR_VYxUMkfmEOwirNRkXaJnpz9w2s=",
        background: "gray",
        size: 32,
        amount: 50,
        quantity: 1,
      },

      {
        id: 503,
        name: "Rolex",
        image:
          "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        background: "gray",
        size: 15,
        amount: 550,
        quantity: 1,
      },
    ]);

    const increaseQuantity = (id: number) => {
      cartItems.value.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity++ } : item
      );
    };

    const decreaseQuantity = (id: number) => {
      cartItems.value.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity-- : 1 }
          : item
      );
    };

    // const subTotal = ref<number>();

    const shippingFee = ref(5);

    const subTotal = computed(() => {
      // cartItems.value.reduce((acc, next) => {
      //   acc + next.amount;
      // }, 0);
      return cartItems.value.reduce((a, b) => a + b.amount * b.quantity, 0);
    });

    const checkout = () => {
      router.push("/checkout");
    };
    return {
      formatCurrency,
      cartItems,
      increaseQuantity,
      decreaseQuantity,
      // total,
      shippingFee,
      subTotal,
      checkout,
    };
  },
});
</script>

<style scoped></style>
