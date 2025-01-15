<template>
  <div class="card text-left">
    <div class="card-body text-center">
      <h4 class="card-title">Reactivity</h4>
      <p class="card-text">{{ user.name }}</p>
      <p class="card-text">{{ user.age }}</p>
      <input type="text" v-model="user.age" />
      <p>{{ user.age }}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, isReactive, isRef } from "vue";
export default {
  setup() {
    let userName = ref("Nguyễn Phạm Thanh Bình");
    let userAge = ref(21);

    let user = reactive({
      name: "Nguyễn Phạm Thanh Bình",
      age: 23,
    });

    setTimeout(() => {
      userName.value = "Nguyễn Phạm Thanh Bình";
      userAge.value = 21;
      user.name = "Nguyễn Phạm Thanh Bình";
      user.age = 21;
    }, 2000);

    console.log(isRef(userName));
    console.log(isReactive(user));

    return {
      userName,
      userAge,
      user,
    };
  },
};
</script>

<style></style>
