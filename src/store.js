import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setValue(state, payload) {
      state.count = payload;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    setValue(context, payload) {
      context.commit("setValue", payload);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
});

export default store;
