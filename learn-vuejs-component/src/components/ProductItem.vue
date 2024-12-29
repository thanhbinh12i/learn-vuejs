<script setup>
defineProps({
  productItem: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <div class="card border border-danger mb-3" style="width: 17rem">
      <img class="card-img-top" alt="Card image cap" :src="productItem.image" />
      <div class="card-body">
        <h5 class="card-title">{{ productItem.name }}</h5>
        <div class="card-text text-danger">
          <h4 class="">{{ productItem.price }} VNĐ</h4>
        </div>
        <button class="btn btn-danger">Mua</button>
        <button class="btn btn-info ml-2">Chi Tiết</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
