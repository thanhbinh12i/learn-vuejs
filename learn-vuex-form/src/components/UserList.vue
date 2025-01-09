<template>
  <tbody>
    <user-item
      v-for="(user, index) in userListBySearchName"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    UserItem,
  },
  // computed: mapState(["userList"]),
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
    // userListByBoy() {
    //   return this.$store.getters.userListByBoy;
    // },
    ...mapGetters({
      userListByBoy: "userListByBoy",
      userListBySearchName: "userListBySearchName",
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
