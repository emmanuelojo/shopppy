<template>
  <div class="main-layout">
    <Navbar />

    <div class="content">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Home from "../views/Home.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Navbar,
    Home,
    Footer,
  },

  setup() {
    onMounted(async () => {});

    const visibleLeft = ref(false);

    const closeSideBar = () => {
      visibleLeft.value = false;
    };

    return { visibleLeft, closeSideBar };
  },
});
</script>

<style scoped>
/* .main-layout {
  margin: 0;
  padding: 0;
  position: relative;

  .hamburger-menu {
    display: none;
  }

  .body {
    display: flex;

    .sidebar {
      width: 18vw;
      height: 100vh;
      background: #0d142f;
      position: fixed;

      .brand {
        .admin-init {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 30px 0;

          span {
            background: #faa100;
            color: #f7f7f7;
            font-weight: 500;
            font-size: 22px;
            border-radius: 50%;
            padding: 10px 7px;
          }
        }
      }
    }

    .content {
      width: 88vw;
      height: 100%;
      overflow-y: auto;
      margin-left: 18.5%;
    }
  }
}
@media screen and (max-width: 480px) {
  .main-layout {
    background: #e5e5e5;

    .body {
      width: 100vw;
      display: flex;
      flex-direction: column;

      .sidebar {
        display: none;
        width: 0vw;
      }

      .content {
        width: 100vw;
        margin-left: 0;
        background: #e5e5e5;
      }
    }
  }
} */
</style>
