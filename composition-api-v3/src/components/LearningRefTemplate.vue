<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Ref Template</h4>
      <input type="text" name="age" value="2" id="age" ref="tagInput" />
      <button class="btn btn-info" @click="handleClick">Click</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const tagInput = ref(null);
    function handleClick() {
      console.log(tagInput.value.value);
      tagInput.value.focus();
    }
    return {
      tagInput,
      handleClick,
    };
  },
};
</script>

<style></style>
