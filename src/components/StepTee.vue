<template>
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
          <input id="age" class="input" type="text" v-model.number="user.age">
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
    <div class="column is-2">
      <label class="label" for="height">Height</label>
    </div>
    <div class="column is-4">
      <div class="field has-addons">
        <p class="control">
          <input id="height" class="input" type="text" v-model.number="user.height">
        </p>
        <p class="control">
          <a class="button is-static">
            cm
          </a>
        </p>
      </div>
    </div>
    <div class="column is-2">
      <label class="label" for="weight">Weight</label>
    </div>
    <div class="column is-4">
      <div class="field has-addons">
        <p class="control">
          <input id="weight" class="input" type="text" v-model.number="user.weight">
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
          <input id="exercise" class="slider is-fullwidth is-circle" step="1" min="0" max="4" v-model="user.exercise" type="range">
        </div>
      </div>
    </div>
    <div class="column is-one-fifth has-text-centered is-uppercase" v-for="exercise in exercises">
      {{ exercise }}
    </div>
    <!-- END Exercise -->

    <a class="column" v-on:click="nextStep">Next step</a>
  </div>
</template>

<script>
  export default {
    name: 'StepTee',
    data: () => ({
      // update values when typing the input
      user: {
        gender: undefined,
        age: undefined,
        height: undefined,
        weight: undefined,
        exercise: undefined,
      },
      exercises: ['none', 'low', 'medium', 'high', 'extreme'],
    }),
    methods: {
      nextStep() {
        this.$store.commit('nextStep');
      },
    },
  };
</script>
