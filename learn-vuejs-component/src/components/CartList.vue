<script setup>
import { computed } from "vue";

const props = defineProps({
  cartList: {
    type: Array,
  },
});

const totalPrice = computed(() =>
  props.cartList.reduce((total, cart) => total + cart.price * cart.amount, 0)
);
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên</th>
          <th scope="col">Giá</th>
          <th scope="col">Số Lượng Trong Kho</th>
          <th scope="col">Số Lượng</th>
          <th scope="col">Thành Tiền</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cart, index) in cartList" :key="cart.id">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ cart.name }}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.quantityInStock }}</td>
          <td>
            <button
              class="btn btn-success"
              @click="$emit('handle-up-or-down', { status: true, cart: cart })"
            >
              <i class="fa fa-arrow-up"></i>
            </button>
            <span class="mx-2">{{ cart.amount }}</span>
            <button
              class="btn btn-success"
              @click="$emit('handle-up-or-down', { status: false, cart: cart })"
            >
              <i class="fa fa-arrow-down"></i>
            </button>
          </td>
          <td>{{ cart.amount * cart.price }}</td>
          <td>
            <button
              class="btn btn-danger"
              @click="$emit('handle-delete-cart', cart)"
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Tổng Tiền</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ totalPrice }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
</style>
