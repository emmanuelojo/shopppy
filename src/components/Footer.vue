<template>
  <div class="footer text-xs p-4 md:px-10 md:grid md:grid-cols-3 md:gap-10">
    <div class="company flex flex-col gap-1">
      <p class="company__name font-bold text-lg uppercase">shoppy</p>

      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ut
        totam quaerat iure nisi laudantium eligendi id voluptatibus. Obcaecati
        fuga maxime doloremque tenetur iusto minus similique quisquam?
      </p>

      <div class="social-media my-4 flex items-center gap-5">
        <div class="icon cursor-pointer">
          <i class="fa fa-facebook hover:scale-105"></i>
        </div>
        <div class="icon cursor-pointer">
          <i class="fa fa-instagram hover:scale-105"></i>
        </div>
        <div class="icon cursor-pointer">
          <i class="fa fa-twitter hover:scale-105"></i>
        </div>
        <div class="icon cursor-pointer">
          <i class="fa fa-pinterest hover:scale-105"></i>
        </div>
      </div>
    </div>

    <div class="links">
      <p class="links__header font-semibold text-base">Useful Links</p>

      <div class="grid grid-cols-2">
        <ul class="flex flex-col gap-1">
          <li><a href=""> Home</a></li>
          <li><a href=""> Men's Fashion</a></li>
          <li><a href=""> Accessories</a></li>
          <li><a href=""> Order Tracking</a></li>
          <li><a href=""> Wishlist</a></li>
        </ul>

        <ul class="flex flex-col gap-1">
          <li>
            <router-link
              :to="{
                name: 'Cart',
              }"
            >
              Cart
            </router-link>
          </li>
          <li><a href=""> Women's Fashion</a></li>
          <li><a href=""> My Account</a></li>
          <li><a href=""> Terms</a></li>
        </ul>
      </div>
    </div>

    <div class="contact">
      <p class="contact__header mt-5 md:mt-0 text-base font-semibold">
        Contact Us
      </p>

      <div class="flex flex-col gap-1">
        <p class="flex items-center gap-1">
          <i class="fa fa-map-pin"></i> 633, WestMinster Alley
        </p>
        <p class="flex items-center gap-1">
          <i class="fa fa-phone"></i> +234 555 555 555
        </p>
        <p class="flex items-center gap-1">
          <i class="fa fa-envelope"></i> contact@shoppy.dev
        </p>
        <div class="payment-channels flex gap-1 items-center">
          <i class="fa fa-cc-visa" style="color: navy"></i>
          <i class="fa fa-cc-amex" style="color: blue"></i>
          <i class="fa fa-cc-mastercard" style="color: red"></i>
          <i class="fa fa-cc-discover" style="color: orange"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",

  setup() {},
});
</script>

<style scoped>
/* .footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  padding: 1.5rem;

  @media screen and (max-width: 31.25rem) {
    grid-template-columns: repeat(1, auto);
  }

  .company {
    text-align: left;

    &__name {
      text-transform: uppercase;
      font-size: larger;
      font-weight: 600;
    }

    .description {
      margin-top: 1.5rem;
    }

    .social-media {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      @media screen and (max-width: 31.25rem) {
        justify-content: center;
      }

      .icon cursor-pointer {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;

        &:first-child {
          background-color: blue;
        }

        &:nth-child(2) {
          background-color: red;
        }

        &:nth-child(3) {
          background-color: blue;
        }
        &:nth-child(4) {
          background-color: red;
        }

        i {
          color: #fff;
        }
      }
    }
  }

  .links {
    &__header {
      font-weight: 600;
    }
    > div {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 2rem;

      ul {
        li {
          margin: 0.5rem 0;
          a {
            text-decoration: none;
          }
        }
      }
    }
  }

  .contact {
    &__header {
      font-weight: 600;
    }

    > div {
      margin-top: 1.5rem;

      p {
        margin: 0.5rem 0;

        i {
          margin-right: 0.5rem;
        }
      }
    }
  }
} */
</style>
