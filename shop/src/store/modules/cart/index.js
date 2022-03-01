import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

// context = { commit, dispatch, state, rootState, getters, rootGetters }

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
