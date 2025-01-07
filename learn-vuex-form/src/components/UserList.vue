<template>
  <tbody>
    <user-item
      v-for="(user, index) in userList"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    UserItem,
  },
  // computed: mapState(["userList"]),
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
};
//script setup
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// import UserItem from './UserItem.vue';

// const store = useStore();

// const userList = computed(() => store.state.userList);
</script>

<style></style>
