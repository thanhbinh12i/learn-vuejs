<template>
  <tr>
    <td>
      <img :src="face1" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        v-for="(item, index) in user.programmingLanguage"
        class="badge badge-gradient-primary mr-2"
        :key="index"
        >{{ item }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button type="button" class="mr-2 btn btn-gradient-danger btn-icon-text">
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button type="button" class="btn btn-gradient-info btn-icon-text">
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
</template>

<script setup>
import face1 from "../assets/images/faces/face1.jpg";
defineProps({
  user: {
    type: Object,
  },
});
</script>

<style></style>
