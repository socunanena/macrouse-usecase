import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    steps: ['tee', 'goal', 'distribution'],
    currentStep: 0,
    user: {
      tee: undefined,
    },
  },
  mutations: {
    nextStep(state) {
      state.currentStep += 1;
    },
    toStep(state, { step }) {
      state.currentStep = state.steps.indexOf(step);
    },
    tee(state, tee) {
      state.user.tee = tee;
    },
  },
});

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
});

export default app;
