<template>
  <div>
    <label class="label" for="goal">Goal</label>
    <div class="field">
      <p class="control has-text-centered">
        <label class="radio" v-for="(goalFactor, goalText) in goals">
          <input id="goal" type="radio" v-model="user.goal" :value="goalFactor">
          {{ goalText }}
        </label>
      </p>
    </div>

    <a class="button" v-on:click="submit">Next step</a>
  </div>
</template>

<script>
  export default {
    name: 'StepGoal',
    data: () => ({
      user: {
        goal: undefined,
      },
      goals: {
        '-20%': 0.8,
        '-10%': 0.9,
        'Maintain': 1,
        '+10%': 1.1,
        '+20%': 1.2,
      },
    }),
    methods: {
      nextStep() {
        this.$store.commit('nextStep');
      },
      calculateGoal() {
        this.$store.commit('goal', Math.round(this.$store.state.user.tee * this.user.goal));
      },
      submit() {
        this.calculateGoal();
        this.nextStep();
      },
    },
  };
</script>
