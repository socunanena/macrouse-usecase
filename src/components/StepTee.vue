<template>
  <div class="container">
    <div class="columns is-multiline">
      <!-- BEGIN Gender & Age -->
      <div class="column is-2">
        <label class="label">Gender</label>
      </div>
      <div class="column is-4">
        <div class="field has-addons">
          <p class="control">
            <a class="button">
              Male
            </a>
          </p>
          <p class="control">
            <a class="button">
              Female
            </a>
          </p>
        </div>
      </div>
      <div class="field column is-2">
        <label class="label" for="age">Age</label>
      </div>
      <div class="column is-4">
        <div class="field has-addons">
          <p class="control">
            <input id="age" class="input" type="text" :value="age">
          </p>
          <p class="control">
            <a class="button is-static">
              years
            </a>
          </p>
        </div>
      </div>
      <!-- END Gender & Age -->

      <!-- BEGIN Height & Weight -->
      <div class="column is-1">
        <label class="label" for="height">Height</label>
      </div>
      <div class="column is-5">
        <div class="field has-addons">
          <p class="control">
            <input id="height" class="input" type="text" :value="height">
          </p>
          <p class="control">
            <a class="button is-static">
              cm
            </a>
          </p>
        </div>
      </div>
      <div class="column is-1">
        <label class="label" for="weight">Weight</label>
      </div>
      <div class="column is-5">
        <div class="field has-addons">
          <p class="control">
            <input id="weight" class="input" type="text" :value="weight">
          </p>
          <p class="control">
            <a class="button is-static">
              kg
            </a>
          </p>
        </div>
      </div>
      <!-- END Height & Weight -->

      <!-- BEGIN Exercise -->
      <div class="column is-full">
        <label class="label" for="exercise">Exercise level</label>
        <div class="field">
          <div class="control">
            <input id="exercise" class="slider is-fullwidth is-circle" step="1" min="0" max="4" :value="exercise" type="range">
          </div>
        </div>
      </div>
      <div class="column is-one-fifth has-text-centered is-uppercase" v-for="exercise in exercises">
        {{ exercise }}
      </div>
      <!-- END Exercise -->

    </div>

    <a v-on:click="nextStep">Next step</a>
  </div>
</template>

<script>
  export default {
    name: 'StepTee',
    data: () => ({
      // update values when typing the input
      gender: undefined,
      age: undefined,
      height: undefined,
      weight: undefined,
      exercise: undefined,
      exercises: ['none', 'low', 'medium', 'high', 'extreme'],
    }),
    methods: {
      nextStep() {
        this.$store.commit('nextStep');
      },
    },
  };
</script>
