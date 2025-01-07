<template>
  <tr>
    <td>
      <img :src="face1" class="mr-2" alt="image" />
      Nguyễn Phạm Thanh Bình
    </td>
    <td>23</td>
    <td>
      <label class="badge badge-gradient-primary mr-2">Java</label>
      <label class="badge badge-gradient-primary mr-2">Java</label>
      <label class="badge badge-gradient-primary mr-2">Java</label>
    </td>
    <td>Nam</td>
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
</script>

<style></style>
