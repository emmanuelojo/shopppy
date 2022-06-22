import { computed, reactive, readonly } from "vue";
import { Customer } from "../models/Customer";
import userApi from "../network/userApi";

interface State {
  user: Customer | null;
  bgColour: boolean;
}

const state = reactive<State>({
  user: null,
  bgColour: true,
});

const mutations = {
  setUser: (payload: Customer) => {
    state.user = payload;
  },
  setBgColour: (payload: boolean) => {
    state.bgColour = !state.bgColour;
  },
};

const actions = {
  login: async (data: any) => {
    const apiCall = await userApi.login(data);

    const result = apiCall;

    if (result) {
      mutations.setUser(result);

      return {
        success: true,
        message: "Success",
      };
    } else {
      return {
        success: false,
        message: "Fail",
      };
    }
  },
};

const getters = {
  user: computed(() => state.user),
  bgStatus: computed(() => state.bgColour),
};

export default { state: readonly({ ...state }), actions, mutations, getters };
