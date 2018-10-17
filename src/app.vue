<template>
  <section class="section">
    <div class="container">
      <div class="panel" v-bind:class="{ 'is-invisible': remainingSteps.includes('tee') }">
        <div class="panel-heading is-radiusless" v-on:click="toStep('tee')">
          BMR & TEE
        </div>
        <div class="panel-block" v-bind:class="{ 'is-invisible': steps[currentStep] !== 'tee' }">
          <a v-on:click="nextStep">Next step</a>
        </div>
      </div>
      <div class="panel" v-bind:class="{ 'is-invisible': remainingSteps.includes('goal') }">
        <div class="panel-heading is-radiusless" v-on:click="toStep('goal')">
          Goal
        </div>
        <div class="panel-block" v-bind:class="{ 'is-invisible': steps[currentStep] !== 'goal' }">
          <a v-on:click="nextStep">Next step</a>
        </div>
      </div>
      <div class="panel" v-bind:class="{ 'is-invisible': remainingSteps.includes('distribution') }">
        <div class="panel-heading is-radiusless" v-on:click="toStep('distribution')">
          Weekly distribution
        </div>
        <div class="panel-block" v-bind:class="{ 'is-invisible': steps[currentStep] !== 'distribution' }">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      steps: ['tee', 'goal', 'distribution'],
      currentStep: 0,
    }),
    computed: {
      remainingSteps: function() {
        return this.steps.slice(this.currentStep + 1);
      },
    },
    methods: {
      nextStep: function() {
        this.currentStep += 1;
      },
      toStep: function(step) {
        this.currentStep = this.steps.indexOf(step);
      },
    },
  };
</script>

<style lang="sass">
  @import '~bulma/bulma.sass'
</style>
