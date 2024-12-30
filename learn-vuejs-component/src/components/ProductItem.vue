<script setup>
import { defineEmits, ref } from "vue";
import ProductDetail from "./TheProductDetail.vue";

const emit = defineEmits(["handle-buy"]);

defineProps({
  productItem: {
    type: Object,
  },
});
const handleBuy = (productItem) => {
  emit("handle-buy", productItem);
};

const isOpenModalDetail = ref(false);

const handleOpenModalDetail = () => {
  isOpenModalDetail.value = true;
};

const handleCloseModalDetail = () => {
  isOpenModalDetail.value = false;
};
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
        <button class="btn btn-danger" @click="handleBuy(productItem)">
          Mua
        </button>
        <button class="btn btn-info ml-2" @click="handleOpenModalDetail">
          Chi Tiết
        </button>
      </div>
    </div>
    <teleport to="#app">
      <app-modal
        :title="'Chi tiết Sản Phẩm'"
        :is-open="isOpenModalDetail"
        :onClose="handleCloseModalDetail"
      >
        <product-detail :productItem="productItem"></product-detail>
      </app-modal>
    </teleport>
  </div>
</template>

<style scoped>
</style>
