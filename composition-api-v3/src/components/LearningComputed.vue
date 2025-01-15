<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Computed</h4>
      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" v-model="lastName" />
      </div>
      <p class="badge badge-success">Họ Và Tên : {{ fullName }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const fullName = computed(() => lastName.value + " " + firstName.value);

    return {
      setFirstName,
      setLastName,
      firstName, // firstName : firstName,
      lastName,
      fullName,
    };
  },
};
</script>

<style></style>
