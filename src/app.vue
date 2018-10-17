<template>
  <section class="section">
    <div class="container">
      <div class="panel is-marginless" v-bind:class="{ 'is-hidden': remainingSteps.includes('tee') }">
        <div class="panel-heading is-radiusless" v-on:click="toStep('tee')">
          BMR & TEE
        </div>
        <div class="panel-block" v-bind:class="{ 'is-hidden': steps[currentStep] !== 'tee' }">
          <a v-on:click="nextStep">Next step</a>
        </div>
      </div>
      <div class="panel is-marginless" v-bind:class="{ 'is-hidden': remainingSteps.includes('goal') }">
        <div class="panel-heading is-radiusless" v-on:click="toStep('goal')">
          Goal
        </div>
        <div class="panel-block" v-bind:class="{ 'is-hidden': steps[currentStep] !== 'goal' }">
          <a v-on:click="nextStep">Next step</a>
        </div>
      </div>
      <div class="panel is-marginless" v-bind:class="{ 'is-hidden': remainingSteps.includes('distribution') }">
        <div class="panel-heading is-radiusless" v-on:click="toStep('distribution')">
          Weekly distribution
        </div>
        <div class="panel-block" v-bind:class="{ 'is-hidden': steps[currentStep] !== 'distribution' }">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      steps() {
        return this.$store.state.steps;
      },
      currentStep() {
        return this.$store.state.currentStep;
      },
      remainingSteps() {
        return this.steps.slice(this.currentStep + 1);
      },
    },
    methods: {
      nextStep() {
        this.$store.commit('nextStep');
      },
      toStep(step) {
        this.$store.commit('toStep', { step });
      },
    },
  };
</script>

<style lang="sass">
  @import '~bulma/bulma.sass'
</style>
