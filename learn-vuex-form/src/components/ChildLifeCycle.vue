<template>
  <h1>Child Life Cycle</h1>
</template>

<script>
export default {
  mounted() {
    this.hello = setInterval(() => {
      console.log("hello vuejs");
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.hello);
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style></style>
