<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Lifecycle Hook</h4>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";

export default {
  setup() {
    console.log("beforeCreate - created");
    onBeforeMount(function() {
      console.log("onBeforeMount");
    });
    onMounted(function() {
      console.log("onMounted");
    });
  },
};
</script>

<style></style>
