<script setup>
import ProductList from "./components/ProductList.vue";
import TheHeader from "./components/TheHeader.vue";
import { ref } from "vue";
const cartList = ref([]);
const handleBuy = (productItem) => {
  console.log(productItem);
  const index = cartList.value.findIndex((cart) => cart.id === productItem.id);

  if (index !== -1) {
    cartList.value[index].amount += 1;
  } else {
    const newProductItem = { ...productItem, amount: 1 };
    cartList.value = [...cartList.value, newProductItem];
  }
};
const handleDelete = (cart) => {
  cartList.value = cartList.value.filter((cartItem) => cartItem.id !== cart.id);
};
const handleUpOrDownAmount = (params) => {
  const { status, cart } = params;
  const index = cartList.value.findIndex((cartItem) => cartItem.id === cart.id);
  if (index !== -1) {
    if (status) {
      if (
        cartList.value[index].amount < cartList.value[index].quantityInStock
      ) {
        cartList.value[index].amount += 1;
      }
    } else {
      if (cartList.value[index].amount > 1) {
        cartList.value[index].amount -= 1;
      }
    }
  }
};
</script>

<template>
  <div>
    <header>
      <TheHeader
        :cartList="cartList"
        @handle-delete-cart="handleDelete"
        @handle-up-or-down="handleUpOrDownAmount"
      />
    </header>
    <main class="container">
      <product-list @handle-buy="handleBuy" />
    </main>
  </div>
</template>

<style scoped>
</style>
