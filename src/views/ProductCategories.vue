<template>
  <div class="px-4 mt-10">
    <p class="text-xl uppercase text-center font-semibold">Categories</p>
    <div
      class="product-categories my-10 md:flex md:justify-center gap-5 md:flex-wrap"
    >
      <div
        @click="goToCategory(category)"
        v-for="(category, idx) in productCategories"
        :key="idx"
        class="category mb-5 md:mb-0 md:m-1 cursor-pointer"
        :class="[
          idx === productCategories.length - 1
            ? 'md:w-[46%] lg:w-[45.5%]'
            : idx === productCategories.length - 2
            ? 'md:w-[46%] lg:w-[45.5%]'
            : 'md:w-[30%] lg:w-[30%]',
        ]"
      >
        <div class="w-full h-60">
          <img
            :src="category.image"
            :alt="category.categoryName"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="category__text text-center py-20">
          <p class="font-bold text-2xl uppercase">{{ category.title }}</p>
          <p class="description mt-1 text-sm">{{ category.desc }}</p>

          <div
            class="shop w-fit bg-white mt-4 p-2 flex justify-center mx-auto text-black"
          >
            SHOP NOW
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import BootsImage from "../assets/images/chelsea3.jpg";
import HighHeelsImage from "../assets/images/high-heels.jpg";
import MacbookImage from "../assets/images/macbook.jpg";
import PumaImage from "../assets/images/puma.jpg";
import PythonImage from "../assets/images/python-book.jpg";
import router from "../router";
import productsStore from "../store/productsStore";

export default defineComponent({
  name: "ProductCategories",

  setup() {
    onMounted(async () => {
      await productsStore.actions.getProducts();
    });

    const productCategories = [
      {
        id: 1,
        title: "Education",
        desc: "Lorem ipsuQuod, neque animi! Minima provident",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        background: "red",
        link: "/product:education",
        categoryName: "education",
      },
      {
        id: 2,
        title: "Sports",
        desc: "Lorem ipsuQuod, neque animi! Minima provident",
        image:
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        background: "brown",
        link: "/product:sports",
        categoryName: "sports",
      },
      {
        id: 3,
        title: "Fashion",
        desc: "Lorem ipsuQuod, neque animi! Minima provident",
        image:
          "https://media.istockphoto.com/photos/men-fashion-casual-clothing-set-and-accessories-on-wooden-background-picture-id1219684906?b=1&k=20&m=1219684906&s=170667a&w=0&h=tQ__TeLPJTzKGVryaUPADFyetLvvWqWlmh5J60QN5YE=",
        background: "orange",
        link: "/product:boots",
        categoryName: "fashion",
      },
      {
        id: 4,
        title: "Women",
        desc: "Lorem ipsuQuod, neque animi! Minima provident",
        image:
          "https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        background: "pink",
        link: "/product:heels",
        categoryName: "women",
      },
      {
        id: 5,
        title: "Tech",
        desc: "Lorem ipsuQuod, neque animi! Minima provident",
        image:
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        background: "gray",
        link: "/product:macbook",
        categoryName: "tech",
      },
    ];

    const goToCategory = (cat: any) => {
      router.push(`/categories/${cat.categoryName}`);
    };

    return {
      BootsImage,
      productCategories,
      HighHeelsImage,
      MacbookImage,
      PumaImage,
      PythonImage,
      products: productsStore.getters.products,
      goToCategory,
    };
  },
});
</script>

<style scoped>
.category {
  position: relative;
}

.category:hover .category__text {
  display: block;
}

.category__text {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s ease-in-out;
  transition-duration: 1s;
}

.description {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 3px 6px;
}
</style>
