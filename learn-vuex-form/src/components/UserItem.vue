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
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemove(user.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleOpenModalEdit"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
    <teleport to="#app">
      <app-modal :isOpen="isModalEdit" :handelCloseModal="handleCloseModalEdit">
        <form-edit-user :userInfo="user"></form-edit-user>
      </app-modal>
    </teleport>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
import face1 from "../assets/images/faces/face1.jpg";
import FormEditUser from "./FormUser.vue";

export default {
  components: { FormEditUser },
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      face1,
      isModalEdit: false,
    };
  },
  methods: {
    ...mapActions({
      handleRemove: "removeUserAction",
    }),
    handleOpenModalEdit() {
      this.isModalEdit = true; // mở modal
    },
    handleCloseModalEdit() {
      this.isModalEdit = false; // đóng modal
    },
  },
};
</script>

<style></style>
