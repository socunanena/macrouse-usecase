<template>
  <div class="panel is-marginless" v-bind:class="{ 'is-hidden': remainingSteps.includes(step) }">
    <div class="panel-heading is-radiusless" v-on:click="toStep(step)">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            {{ title }}
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            {{ value }}
          </div>
        </div>
      </nav>
    </div>
    <div class="panel-block" v-bind:class="{ 'is-hidden': steps[currentStep] !== step }">
      <div class="columns is-centered">
        <div class="column is-half">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StepLayout',
    props: {
      step: String,
      title: String,
      value: String,
    },
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
      toStep(step) {
        this.$store.commit('toStep', { step });
      },
    },
  };
</script>
