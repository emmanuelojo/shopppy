<template>
  <div class="category px-4 md:px-10">
    <div class="category__name py-3">
      <p class="font-bold text-xl">
        {{ capitalizeText(categoryName.toString()) }}
      </p>
    </div>

    <div class="actions-panel flex justify-between">
      <div class="md:flex md:items-center md:gap-3">
        <p class="font-semibold">Filter products:</p>
        <div class="grid gap-2 md:flex md:items-center">
          <select name="" id="" class="text-sm border outline-none">
            <option value="">Red</option>
            <option value="">Green</option>
            <option value="">Blue</option>
          </select>

          <select name="" id="" class="text-sm border outline-none">
            <option value="">Size</option>
            <option value="">XL</option>
            <option value="">Blue</option>
          </select>
        </div>
      </div>

      <div class="md:flex md:items-center md:gap-3">
        <p class="font-semibold">Filter products:</p>
        <select name="" id="" class="text-sm border outline-none w-28">
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>

    <div
      class="products mt-5 md:mt-10 md:mb-32 grid md:grid-cols-2 lg:grid-cols-auto md:gap-4"
    >
      <!-- <div class="product" v-for="product in products" :key="product._id"> -->
      <div
        class="product h-60 mb-5 cursor-pointer"
        v-for="(product, idx) in activeCategory"
        :key="idx"
      >
        <div class="product__image flex justify-center w-full h-60">
          <img
            :src="product.image"
            alt="Image"
            class="w-full h-full object-cover"
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
          >
            <router-link :to="product.link">
              <i class="fa fa-search"></i>
            </router-link>
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
import { defineComponent, onMounted, ref, watch } from "vue";
import router from "../router";
import productsStore from "../store/productsStore";
import { capitalizeText } from "../utils/helpers";
import TopProducts from "../views/TopProducts.vue";

export default defineComponent({
  name: "CategoryDetails",

  components: { TopProducts },

  setup() {
    onMounted(async () => {
      // await productsStore.actions.getProductCategory(categoryName.toString());
      routeParam.value;
      getProducts();
    });

    const routeParam = ref(router.currentRoute.value.params.category);

    const categoryName = router.currentRoute.value.params.category;

    const products = productsStore.getters.productCategory;

    const activeCategory = ref<any>([]);

    const eduProducts = [
      {
        image:
          "https://media.istockphoto.com/photos/shot-of-an-unrecognizable-group-of-children-sitting-in-their-school-picture-id1339040567?b=1&k=20&m=1339040567&s=170667a&w=0&h=tUsjuOY4hsW3CcH81I9w1MQVmTNG3i7Upuz3YPs4pGg=",
        link: "/products/education",
      },
      {
        image:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/education",
      },
      {
        image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        link: "/products/education",
      },
      {
        image:
          "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        link: "/products/education",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        link: "/products/education",
      },
    ];

    const sportsProducts = [
      {
        image:
          "https://media.istockphoto.com/photos/american-football-championship-teams-ready-professional-players-picture-id1355086328?b=1&k=20&m=1355086328&s=170667a&w=0&h=4FMcbpj34u7q13w9hNcqgsjbuJlL2TYbCoDMy0Cu-DI=",
        link: "/products/sports",
      },
      {
        image:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/sports",
      },
      {
        image:
          "https://media.istockphoto.com/photos/beautiful-young-black-boy-training-on-the-football-pitch-picture-id1295248329?b=1&k=20&m=1295248329&s=170667a&w=0&h=jfcc98lBsoGb2FpCtsfh61egArW4_oFM1ZE9mYTMUFI=",
        link: "/products/sports",
      },
      {
        image:
          "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/sports",
      },
      {
        image:
          "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/sports",
      },
    ];

    const fashionProducts = [
      {
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/fashion",
      },
      {
        image:
          "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/fashion",
      },
      {
        image:
          "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        link: "/products/fashion",
      },
      {
        image:
          "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        link: "/products/fashion",
      },
      {
        image:
          "https://media.istockphoto.com/photos/collage-with-female-and-male-legs-in-colored-sneakers-trainers-over-picture-id1337214807?b=1&k=20&m=1337214807&s=170667a&w=0&h=JLKBSuAs2HoqcT9b6NlMXdymaG4sjP6FNE7Q8T2OMpA=",
        link: "/products/fashion",
      },
    ];

    const womenProducts = [
      {
        image:
          "https://media.istockphoto.com/photos/beautiful-afro-woman-with-pigtails-and-stylish-clothes-picture-id1342849839?b=1&k=20&m=1342849839&s=170667a&w=0&h=1JPdfTmSQFRUTZhwqH9XxS9Jbfs2dyfqN69SSC4nzks=",
        link: "/products/women",
      },
      {
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/women",
      },
      {
        image:
          "https://media.istockphoto.com/photos/beautiful-girl-wearing-golden-jewerly-a-golden-necklace-and-golden-picture-id1317457980?b=1&k=20&m=1317457980&s=170667a&w=0&h=9_V18Nrx33svfSbR_VYxUMkfmEOwirNRkXaJnpz9w2s=",
        link: "/products/women",
      },
      {
        image:
          "https://media.istockphoto.com/photos/smiling-beautiful-woman-in-red-dress-and-high-heels-is-walking-picture-id898031604?b=1&k=20&m=898031604&s=170667a&w=0&h=5UHi_GShP-fAUuL8PzDiuksoZrDpXhm9-7A-e9Xp6j8=",
        link: "/products/women",
      },
      {
        image:
          "https://media.istockphoto.com/photos/beautiful-portrait-of-an-african-girl-in-sunglasses-in-the-shape-of-picture-id1366224227?b=1&k=20&m=1366224227&s=170667a&w=0&h=owJtBFEvQF6xOqT-WYumxIa400-VC4Rmy5fm_oD1BR4=",
        link: "/products/women",
      },
    ];

    const techProducts = [
      {
        image:
          "https://images.unsplash.com/photo-1635775844900-706fa4015ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        link: "/products/tech",
      },
      {
        image:
          "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsbCUyMHhwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/tech",
      },
      {
        image:
          "https://images.unsplash.com/photo-1561930661-20c9650e3e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amJsJTIwc3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "/products/tech",
      },
      {
        image:
          "https://media.istockphoto.com/photos/two-wheel-electric-selfbalancing-scooter-red-picture-id491653492?b=1&k=20&m=491653492&s=170667a&w=0&h=98000q27L4uRirnumcSuu283PeNrBS1yLv1y-n-jILk=",
        link: "/products/tech",
      },
      {
        image:
          "https://media.istockphoto.com/photos/gamer-workspace-concept-top-view-a-gaming-gear-mouse-keyboard-with-picture-id1051243766?b=1&k=20&m=1051243766&s=170667a&w=0&h=gibAi3__-1-hCewRWv3tl9n_Txmf-OfyU-ruJNP0WxY=",
        link: "/products/tech",
      },
    ];

    const randomProducts = [
      {
        image: "https://picsum.photos/200",
        link: "/products/random",
      },
      {
        image: "https://picsum.photos/200",
        link: "/products/random",
      },
      {
        image: "https://picsum.photos/200",
        link: "/products/random",
      },
      {
        image: "https://picsum.photos/200",
        link: "/products/random",
      },
      {
        image: "https://picsum.photos/200",
        link: "/products/random",
      },
    ];

    const getProducts = () => {
      if (routeParam.value === "education") {
        activeCategory.value = [...eduProducts];
      } else if (routeParam.value === "sports") {
        activeCategory.value = [...sportsProducts];
      } else if (routeParam.value === "fashion") {
        activeCategory.value = [...fashionProducts];
      } else if (routeParam.value === "women") {
        activeCategory.value = [...womenProducts];
      } else if (routeParam.value === "tech") {
        activeCategory.value = [...techProducts];
      } else {
        activeCategory.value = [...randomProducts];
      }
    };

    watch(routeParam, () => {
      if (routeParam.value === "education") {
        activeCategory.value = [...eduProducts];
      } else if (routeParam.value === "sports") {
        activeCategory.value = [...sportsProducts];
      } else if (routeParam.value === "fashion") {
        activeCategory.value = [...fashionProducts];
      } else if (routeParam.value === "women") {
        activeCategory.value = [...womenProducts];
      } else if (routeParam.value === "tech") {
        activeCategory.value = [...techProducts];
      } else {
        activeCategory.value = [...randomProducts];
      }
    });

    return {
      capitalizeText,
      products,
      categoryName,
      routeParam,
      activeCategory,
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

.description {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 3px 6px;
}
</style>
