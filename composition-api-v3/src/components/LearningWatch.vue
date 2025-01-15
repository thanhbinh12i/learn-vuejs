<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Watch</h4>
      <p class="badge badge-success">count : {{ count }}</p>
      <div>
        <button class="btn btn-danger" @click="handleIncrementCount">
          increment count
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const count = ref(1);
    function handleIncrementCount() {
      count.value += 1;
    }
    watch(count, function(newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue > 10) {
        count.value = 1;
      }
    });
    return {
      count,
      handleIncrementCount,
    };
  },
};
</script>

<style></style>
