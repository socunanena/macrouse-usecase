<template>
  <div>
    <a v-on:click="nextStep">Next step</a>
  </div>
</template>

<script>
  export default {
    name: 'StepTee',
    props: {},
    methods: {
      nextStep() {
        this.$store.commit('nextStep');
      },
    },
  };
</script>
