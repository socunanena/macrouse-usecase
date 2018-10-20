<template>
  <div class="columns is-multiline">

    <!-- BEGIN Gender & Age -->
    <div class="column is-2">
      <label class="label">Gender</label>
    </div>
    <div class="column is-4">
      <div class="field has-addons">
        <p class="control">
          <label class="radio">
            <input type="radio" v-model="user.gender" value="male">
            Male
          </label>
          <label class="radio">
            <input type="radio" v-model="user.gender" value="female">
            Female
          </label>
        </p>
      </div>
    </div>
    <div class="column is-2">
      <label class="label" for="age">Age</label>
    </div>
    <div class="column is-4">
      <div class="field has-addons">
        <p class="control">
          <input id="age" class="input" type="number" v-model.number="user.age">
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
          <input id="height" class="input" type="number" v-model.number="user.height">
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
          <input id="weight" class="input" type="number" v-model.number="user.weight">
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
        <p class="control has-text-centered">
          <label class="radio is-uppercase" v-for="exercise in exercises">
            <input id="exercise" type="radio" v-model="user.exercise" :value="exercise">
            {{ exercise }}
          </label>
        </p>
      </div>
    </div>
    <!-- END Exercise -->

  </div>
</template>

<script>
  import Macrouse from 'macrouse';

  export default {
    name: 'StepTee',
    data: () => ({
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
      beforeNext() {
        const errors = this.validateUser();

        if (errors.length === 0) {
          this.calculateTee();
        }

        return errors;
      },
      validateUser() {
        return [];
      },
      calculateTee() {
        const macrouse = new Macrouse(this.user);

        this.$store.commit('tee', macrouse.tee());
      },
    },
  };
</script>
