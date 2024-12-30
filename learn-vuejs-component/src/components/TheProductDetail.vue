<script setup>
defineProps({
  productItem: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="col-sm-4">
          <img class="img-thumbnail" :src="productItem.image" alt="" />
        </div>
        <div class="col-sm-8">
          <div class="alert alert-success">
            <b>Name : </b>
            <span> {{ productItem.name }} </span>
          </div>
          <div class="alert alert-success">
            <b>Mô tả : </b>
            <span> {{ productItem.description }} </span>
          </div>
          <div class="alert alert-success">
            <b>Giá Bán : </b>
            <span> {{ productItem.price }} VNĐ </span>
          </div>
          <div class="alert alert-success">
            <b>SỐ lượng tồn kho : </b>
            <span> {{ productItem.quantityInStock }} </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
