<template>
  <div class="grid md:flex md:justify-center gap-5 p-4 lg:p-10">
    <div class="md:w-3/5 lg:w-full order-2 md:order-1 border rounded-2xl p-4">
      <div class="">
        <form @submit.prevent="checkOut">
          <div class="grid sm:flex md:grid lg:flex justify-between gap-10">
            <div class="order-2 md:order-1 grid gap-4 w-[80vw] sm:w-1/2">
              <h3 class="font-semibold">Billing Address</h3>
              <div class="grid gap-0 md:w-full">
                <label for="fname" class="text-sm font-medium"
                  ><i class="fa fa-user"></i> Full Name</label
                >
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John M. Doe"
                  class="border h-10 focus-within:outline-none pl-2"
                />
              </div>
              <div class="grid gap-0 md:w-full">
                <label for="email" class="text-sm font-medium"
                  ><i class="fa fa-envelope"></i> Email</label
                >
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  class="border h-10 focus-within:outline-none pl-2"
                />
              </div>
              <div class="grid gap-0 md:w-full">
                <label for="adr" class="text-sm font-medium"
                  ><i class="fa fa-address-card-o"></i> Address</label
                >
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="542 W. 15th Street"
                  class="border h-10 focus-within:outline-none pl-2"
                />
              </div>
              <div class="grid gap-0 md:w-full">
                <label for="city" class="text-sm font-medium"
                  ><i class="fa fa-institution"></i> City</label
                >
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  class="border h-10 focus-within:outline-none pl-2"
                />
              </div>

              <div
                class="grid md:flex gap-4 md:justify-between md:items-center"
              >
                <div class="grid gap-0">
                  <label for="state" class="text-sm font-medium">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="NY"
                    class="border h-10 focus-within:outline-none pl-2 md:w-[195px] lg:w-full"
                  />
                </div>
                <div class="grid gap-0">
                  <label for="zip" class="text-sm font-medium">Zip</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="10001"
                    class="border h-10 focus-within:outline-none pl-2 md:w-[195px] lg:w-full"
                  />
                </div>
              </div>
            </div>

            <div class="sm:w-1/2 rder-1 md:order-2 grid gap-4">
              <h3 class="font-semibold">Payment</h3>
              <label for="fname" class="text-sm font-medium"
                >Accepted Cards</label
              >
              <div class="flex gap-2 items-center">
                <i class="fa fa-cc-visa" style="color: navy"></i>
                <i class="fa fa-cc-amex" style="color: blue"></i>
                <i class="fa fa-cc-mastercard" style="color: red"></i>
                <i class="fa fa-cc-discover" style="color: orange"></i>
              </div>
              <div class="grid gap-0 md:w-full">
                <label for="cname" class="text-sm font-medium"
                  >Name on Card</label
                >
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                  class="border h-10 focus-within:outline-none pl-2"
                />
              </div>

              <div class="grid gap-0 md:w-full">
                <label for="ccnum" class="text-sm font-medium"
                  >Credit card number</label
                >
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                  class="border h-10 focus-within:outline-none pl-2"
                />
              </div>

              <div class="grid gap-0 md:w-full">
                <label for="expmonth" class="text-sm font-medium"
                  >Exp Month</label
                >
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                  class="border h-10 focus-within:outline-none pl-2"
                />
              </div>

              <div class="grid md:flex gap-4">
                <div class="grid gap-0 md:w-full">
                  <label for="expyear" class="text-sm font-medium"
                    >Exp Year</label
                  >
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2025"
                    class="border h-10 focus-within:outline-none pl-2 md:w-[195px] lg:w-full"
                  />
                </div>
                <div class="grid gap-0 md:w-full">
                  <label for="cvv" class="text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="352"
                    class="border h-10 focus-within:outline-none pl-2 md:w-[195px] lg:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <label class="flex gap-1 mt-4">
            <input type="checkbox" checked name="sameadr" />
            <p class="text-xs">Shipping address same as billing</p>
          </label>
          <input
            type="submit"
            value="Continue to checkout"
            class="mt-4 py-2 w-full bg-black text-sm text-white cursor-pointer hover:scale-y-105"
          />
        </form>
      </div>
    </div>

    <div class="order-1 md:order-2 border rounded-2xl w-full md:w-96 h-fit">
      <div class="">
        <h4 class="font-semibold p-4">Cart ({{ cartItems.length }})</h4>

        <div class="mb-4 px-4 grid gap-4">
          <div
            v-for="(item, idx) in cartItems"
            :key="idx"
            class="flex items-center justify-between"
          >
            <div class="flex items-center justify-between gap-2">
              <img
                :src="item.image"
                alt="Cart Image"
                class="w-10 h-10 object-cover rounded-md"
              />
              <p class="text-sm">{{ item.name }}</p>
            </div>

            <p class="text-sm font-medium">
              {{ formatCurrency("en-us", item.amount, "NGN") }}
            </p>
          </div>
        </div>
        <hr />
        <p class="my-2 mx-4 flex justify-between items-center font-semibold">
          <span> Total </span>
          <span class=" "> {{ formatCurrency("en-us", total, "NGN") }}</span>
        </p>
      </div>
    </div>

    <CheckOutModal v-if="checkoutComplete" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import CheckOutModal from "../components/CheckOutModal.vue";
import router from "../router";
import { formatCurrency } from "../utils/helpers";

export default defineComponent({
  name: "Checkout",
  setup() {
    const checkoutComplete = ref(false);

    const cartItems = [
      {
        id: 5643,
        name: "MacBook",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw=&auto=format&fit=crop&w=500&q=60",
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
    ];

    const total = computed(() => {
      return cartItems.reduce((a, b) => a + b.amount * b.quantity, 0);
    });

    const checkOut = () => {
      checkoutComplete.value = true;

      setTimeout(() => {
        checkoutComplete.value = false;
        router.push("/");
      }, 5000);
    };

    return {
      formatCurrency,
      checkoutComplete,
      cartItems,
      total,
      checkOut,
    };
  },
  components: { CheckOutModal },
});
</script>
