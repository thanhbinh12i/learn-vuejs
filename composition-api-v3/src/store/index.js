import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    incrementMutation(state) {
      state.count++;
    },
  },
  actions: {
    incrementAction(context) {
      context.commit("incrementMutation");
    },
  },
});

export default store;
