<script>
import LearningReactivity from "./components/LearningReactivity.vue";
import LearningProps from "./components/LearningProps.vue";
import LearningMethod from "./components/LearningMethod.vue";
import LearningComputed from "./components/LearningComputed.vue";
import LearningWatch from "./components/LearningWatch.vue";
import LearningRefTemplate from "./components/LearningRefTemplate.vue";
import LearningProvideInject from "./components/LearningProvideInject.vue";
import LearningLifecycleHook from "./components/LearningLifecycleHook.vue";
import LearningVuex from "./components/LearningVuex.vue";
import { provide, ref } from "vue";

export default {
  name: "App",
  components: {
    LearningReactivity,
    LearningVuex,
    LearningProps,
    LearningMethod,
    LearningComputed,
    LearningWatch,
    LearningRefTemplate,
    LearningProvideInject,
    LearningLifecycleHook,
  },
  setup() {
    const age = ref(1);
    setInterval(() => {
      age.value += 1;
    }, 5000);
    provide("name", "Nguyễn Phạm Thanh Bình");
    provide("age", age);
  },
};
</script>

<template>
  <main class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <learning-reactivity />
    <learning-props
      image="https://external-preview.redd.it/KtrRp_bSJnUJu70tLh5zpe8Kb1hnucDofK2L6aoq61U.jpg?auto=webp&s=86bb71312de157ac799964c479fa2016d474d137"
    />
    <learning-method />
    <learning-computed />
    <learning-watch />
    <learning-ref-template />
    <learning-provide-inject />
    <learning-lifecycle-hook />
    <learning-vuex />
  </main>
</template>

<style scoped>
</style>
