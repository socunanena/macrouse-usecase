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
      beforeNext() {
        const errors = this.validateGoal();

        if (errors.length === 0) {
          this.calculateGoal();
        }

        return errors;
      },
      validateGoal() {
        return [];
      },
      calculateGoal() {
        this.$store.commit('goal', Math.round(this.$store.state.user.tee * this.user.goal));
      },
    },
  };
</script>
