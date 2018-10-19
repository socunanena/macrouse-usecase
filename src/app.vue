<template>
  <section class="section">
    <div class="container">
      <div class="steps">
        <div class="step-item">
          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Total Energy Expenditure</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Calorie goal</p>
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
            <step-tee></step-tee>
          </div>
          <div class="step-content has-text-centered">
            <step-goal></step-goal>
          </div>
          <div class="step-content has-text-centered">
            <step-distribution></step-distribution>
          </div>
        </div>
        <div class="steps-actions">
          <div class="steps-action">
            <a href="#" data-nav="next" class="button">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import StepLayout from './components/StepLayout';
  import StepTee from './components/StepTee';
  import StepGoal from './components/StepGoal';
  import StepDistribution from './components/StepDistribution';
  import bulmaSteps from 'bulma-steps';

  export default {
    name: 'Home',
    components: {
      StepLayout,
      StepTee,
      StepGoal,
      StepDistribution,
    },
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
        beforeNext() {
          // TODO return error if empty fields (check this.$store)
          console.log('before next');
        },
        onError() {
          // TODO mark empty fields
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
