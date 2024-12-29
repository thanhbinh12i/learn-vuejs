<script setup>
import ProductList from "./components/ProductList.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div>
    <header>
      <TheHeader />
    </header>
    <main class="container">
      <product-list></product-list>
    </main>
  </div>
</template>

<style scoped>
</style>
