<template>
  <section class="section">
    <div class="container">
      <div class="steps">
        <div class="step-item">
          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Total Energy Expenditure</p>
            <p v-if="tee">{{ tee }} kcals</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Calorie goal</p>
            <p v-if="goal">{{ goal }} kcals</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-marker">3</div>
          <div class="step-details">
            <p class="step-title">Weekly distribution</p>
          </div>
        </div>
        <div class="steps-content">
          <div class="step-content has-text-centered">
            <step-tee ref="stepTee"></step-tee>
          </div>
          <div class="step-content has-text-centered">
            <step-goal ref="stepGoal"></step-goal>
          </div>
          <div class="step-content has-text-centered">
            <step-distribution></step-distribution>
          </div>
        </div>
        <div class="steps-actions">
          <div class="steps-action">
            <a href="#" data-nav="previous" class="button">Back</a>
          </div>
          <div class="steps-action">
            <a href="#" data-nav="next" class="button">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import StepTee from './components/StepTee';
  import StepGoal from './components/StepGoal';
  import StepDistribution from './components/StepDistribution';
  import bulmaSteps from 'bulma-steps';

  export default {
    name: 'Home',
    components: {
      StepTee,
      StepGoal,
      StepDistribution,
    },
    data: () => ({
      stepRefs: ['stepTee', 'stepGoal'],
    }),
    computed: {
      tee() {
        return this.$store.state.user.tee;
      },
      goal() {
        return this.$store.state.user.goal;
      },
    },
    mounted() {
      const element = document.querySelector('.steps');
      const options = {
        beforeNext: currentStep => this.$refs[this.stepRefs[currentStep]].beforeNext(),
        onError() {
          // TODO mark empty fields
          console.log('fields errors');
        },
      };

      new bulmaSteps(element, options);
    },
  };
</script>

<style lang="sass">
  @import '~bulma/bulma.sass'
  @import '~bulma-steps/src/sass'
</style>
