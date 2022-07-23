import { computed, reactive } from "vue";
import { Product } from "../models/Product";
import productsApi from "../network/productsApi";

interface IProductsStoreState {
  products: Product[];
  productCategory: Product[];
  product: Product | null;
}

const state = reactive<IProductsStoreState>({
  products: [],
  productCategory: [],
  product: null,
});

const setProducts = (payload: Product[]) => {
  state.products = payload;
};

const setProductCategory = (payload: Product[]) => {
  state.productCategory = payload;
};

const setSingleProduct = (payload: Product) => {
  state.product = payload;
};

const getProducts = async () => {
  // const apiPath = await productsApi.getProducts();

  // const result = apiPath.data;

  // if (result) {
  //   setProducts(result);

  //   return {
  //     success: true,
  //   };
  // } else {
  //   return {
  //     success: false,
  //   };
  // }
};

const getProductCategory = async (cat: string) => {
  // const apiPath = await productsApi.getProductCategory(cat);

  // const result = apiPath.data;

  // if (result) {
  //   setProductCategory(result);

  //   return {
  //     success: true,
  //   };
  // } else {
  //   return {
  //     success: false,
  //   };
  // }
};

export default {
  getters: {
    products: computed(() => state.products),
    productCategory: computed(() => state.productCategory),
  },

  actions: {
    getProducts,
    getProductCategory,
  },
};
