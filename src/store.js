import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    object: {
      initialProperty: "defined",
    },
  },
  mutations: {
    setPropOnObject(state, { prop, val }) {
      state.object[prop] = val;
    },
  },
  actions: {
    onSetObjectProperty: (context, { prop, val }) => {
      context.commit("setPropOnObject", { prop, val });
    },
  },
  modules: {},
});
