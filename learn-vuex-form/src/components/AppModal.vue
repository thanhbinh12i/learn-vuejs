<template>
  <div v-if="isOpen" class="modal" @click="hanldeClose">
    <div class="modal__container" @click.stop>
      <div class="modal__header">
        <h1 class="modal__title">Form</h1>
        <div class="modal__close" @click="hanldeClose">X</div>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="modal__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    handelCloseModal: {
      type: Function,
    },
  },
  methods: {
    hanldeClose() {
      this.handelCloseModal();
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.modal__container {
  width: 800px;
  height: 70vh;
  overflow-y: scroll;
  margin: auto;
  margin-top: 100px;
  background: white;
  border: 1px solid #888;
  padding: 10px 20px;
}

.modal__container::-webkit-scrollbar {
  width: 3px;
}

.modal__container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.modal__container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__close {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
}
.modal__close:hover {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
