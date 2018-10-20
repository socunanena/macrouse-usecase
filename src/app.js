import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      tee: undefined,
      goal: undefined,
    },
  },
  mutations: {
    tee(state, tee) {
      state.user.tee = tee;
    },
    goal(state, goal) {
      state.user.goal = goal;
    },
  },
});

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
});

export default app;
