<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Provide/Inject</h4>
      <p>{{ name }} -- {{ age }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const name = inject("name", "Lê Huỳnh Như");
    const age = inject("age");

    return {
      name,
      age,
    };
  },
};
</script>

<style></style>
