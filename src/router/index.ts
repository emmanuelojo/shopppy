import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
import OtherLayout from "../layout/OtherLayout.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    component: OtherLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
        meta: {
          title: "Sign in",
          // noAuth: true,
          // guestOnly: true,
        },
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
        meta: {
          title: "Register",
          // noAuth: true,
          // guestOnly: true,
        },
      },
      //       {
      //         path: "/forgot-password",
      //         name: "ForgotPassword",
      //         component: ForgotPassword,
      //         meta: {
      //           title: "Forgot Password",
      //           noAuth: true,
      //           guestOnly: true,
      //         },
      //       },
    ],
  },
  {
    path: "/",
    name: "Main",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: "Home",
        },
      },
      // {
      //   path: "/categories/:categoryId",
      //   name: "CategoryDetails",
      //   component: () => import("../components/CategoryDetails.vue"),
      //   meta: {
      //     title: "Category Details",
      //   },
      // },
      {
        path: "/categories/:category",
        name: "CategoryDetails",
        component: () => import("../components/CategoryDetails.vue"),
        meta: {
          title: "Category Details",
        },
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../views/Products.vue"),
        meta: {
          title: "Products",
        },
      },
      {
        path: "/products/:productId",
        name: "ProductDetails",
        component: () => import("../components/ProductDetails.vue"),
        meta: {
          title: "Product Details",
        },
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Cart.vue"),
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
      },
      // {
      //   path: "/login",
      //   name: "Login",
      //   component: () => import("../views/Login.vue"),
      //   meta: {
      //     title: "Sign in",
      //   },
      // },
      //   {
      //     path: "/dashboard/customers/:id",
      //     name: "CustomerProfile",
      //     component: () => import("@/pages/customers/CustomerProfile.vue"),
      //     props: true,
      //     meta: {
      //       title: "CustomerProfile",
      //     },
      //   },

      //   {
      //     path: "/unauthorised",
      //     name: "unauthorised",
      //     component: () => import("@/pages/403.vue"),
      //     meta: {
      //       noAuth: true,
      //     },
      //   },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
    meta: {
      noAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
});

router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
});

router.beforeEach((to, from, next) => {
  const userIsLoggedOut = !window.localStorage.getItem("token");
  const routeIsGuarded = !to.meta.noAuth;
  const routeIsGuestOnly = !!to.meta.guestOnly;

  window.scrollTo(window.scrollX, 0);

  if (routeIsGuarded) {
    if (userIsLoggedOut) {
      return next({ name: "Login", query: { redirect: to.path } });
    }

    return next();
  } else {
    // this is so that you can't access the guestOnly except you are logged out
    if (routeIsGuestOnly && !userIsLoggedOut) {
      return next({ name: "Home" });
    }

    return next();
  }
});

export default router;
