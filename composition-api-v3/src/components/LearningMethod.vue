<template>
  <div class="card text-left">
    <div class="card-body text-center">
      <h4 class="card-title">Method</h4>
      <p class="card-text">{{ user.name }}</p>
      <p class="card-text">{{ user.age }}</p>
      <button class="btn btn-success" @click="handleClick">Change</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    let userName = ref("Nguyễn Phạm Thanh Bình");
    let userAge = ref(23);

    let user = reactive({
      name: "Nguyễn Phạm Thanh Bình",
      age: 23,
    });

    function handleClick() {
      userName.value = "Lê Huỳnh Như";
      userAge.value = 22;
      user.name = "Lê Huỳnh Như";
      user.age = 22;
    }

    return {
      userName,
      userAge,
      user,
      handleClick,
    };
  },
};
</script>

<style></style>
