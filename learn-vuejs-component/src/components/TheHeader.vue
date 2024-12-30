<script setup>
import { computed, ref } from "vue";
import CartList from "./CartList.vue";

const props = defineProps({
  cartList: {
    type: Array,
  },
});

const isOpenModal = ref(false);

const handleOpenModal = () => {
  isOpenModal.value = true;
};

const handleCloseModal = () => {
  isOpenModal.value = false;
};
const sumAmountCart = computed(() =>
  props.cartList.reduce((sum, cart) => sum + cart.amount, 0)
);
</script>

<template>
  <div>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <a class="navbar-brand header__logo" href="#">Binhdaynee</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <div class="ml-2">
          <button type="button" class="btn btn-danger" @click="handleOpenModal">
            <i class="fa fa-shopping-cart"></i>
            <span class="badge badge-light ml-2">{{ sumAmountCart }}</span>
            <span class="sr-only">unread messages</span>
          </button>
        </div>
      </div>
    </nav>
    <app-modal
      :title="'Giỏ hàng'"
      :isOpen="isOpenModal"
      :onClose="handleCloseModal"
    >
      <cart-list
        :cartList="cartList"
        @handle-delete-cart="$emit('handle-delete-cart', $event)"
        @handle-up-or-down="$emit('handle-up-or-down', $event)"
      />
    </app-modal>
  </div>
</template>

<style scoped>
.header__logo {
  font-size: 30px;
  background: -webkit-linear-gradient(#41b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
