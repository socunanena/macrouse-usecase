<template>
  <div class="container">
    <div class="columns is-multiline">
      <!-- BEGIN Gender & Age -->
      <div class="column is-2">
        <label class="label" for="gender">Gender</label>
      </div>
      <div class="column is-4">
        <div class="field">
          <div class="control">
            <div class="select">
              <select id="gender" :value="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="field column is-2">
        <label class="label" for="age">Age</label>
      </div>
      <div class="column is-4">
        <div class="field has-addons">
          <div class="control">
            <input id="age" class="input" type="text" :value="age">
          </div>
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
      <!-- slider? -->
      <div class="column is-full">
        <label class="label" for="exercise">Exercise level</label>
        <div class="field">
          <div class="control">
            <div class="select">
              <select id="exercise" :value="exercise">
                <option>Male</option>
                <option>Female</option>
                <option>Female</option>
                <option>Female</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>
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
    }),
    methods: {
      nextStep() {
        this.$store.commit('nextStep');
      },
    },
  };
</script>
