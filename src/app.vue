<template>
  <section class="section">
    <div class="container">
      <StepLayout :step="'tee'" :title="'BMR & TEE'">
        <StepTee></StepTee>
      </StepLayout>
      <StepLayout :step="'goal'" :title="'Goal'">
        <StepGoal></StepGoal>
      </StepLayout>
      <StepLayout :step="'distribution'" :title="'Weekly distribution'">
        <StepDistribution></StepDistribution>
      </StepLayout>
    </div>
  </section>
</template>

<script>
  import StepLayout from './components/StepLayout';
  import StepTee from './components/StepTee';
  import StepGoal from './components/StepGoal';
  import StepDistribution from './components/StepDistribution';

  export default {
    name: 'Home',
    components: {
      StepLayout,
      StepTee,
      StepGoal,
      StepDistribution,
    },
  };
</script>

<style lang="sass">
  @import '~bulma/bulma.sass'
</style>
