<script setup>
defineProps({
  isOpen: {
    type: Boolean,
  },
  onClose: {
    type: Function,
  },
});
</script>

<template>
  <div>
    <div class="modal" v-if="isOpen" @click="onClose">
      <div class="modal__container" @click.stop>
        <div class="modal__header">
          <h1>Cart</h1>
          <div class="modal__close" @click="onClose">
            <i class="fa fa-times"></i>
          </div>
        </div>
        <hr />
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal__container {
  width: 950px;
  margin: auto;
  margin-top: 70px;
  background-color: white;
  border: 1px solid #888;
  padding: 10px 20px;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal__header .modal__close {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  font-size: 30px;
}
.modal__header .modal__close:hover {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
