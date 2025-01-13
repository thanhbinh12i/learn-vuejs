<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-5">
        <img class="img-thumbnail" :src="userDetail.avatar" alt="" />
      </div>
      <div class="col-sm-7">
        <h3>
          Name :
          <span class="badge badge-info">
            {{ userDetail.name }}
          </span>
        </h3>
        <h3>
          Age :
          <span class="badge badge-info mt-4">
            {{ userDetail.age }}
          </span>
        </h3>
        <h3>
          Email :
          <span class="badge badge-info mt-4">
            {{ userDetail.email }}
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('users')
export default {
  computed: {
    ...mapState({
      userDetail: (state) => state.userDetail,
    }),
  },
  methods: {
    ...mapActions({
      getUserById: 'getUserByIdAction',
    }),
  },
  created() {
    this.getUserById(this.$route.params.id)
  },
}
</script>

<style></style>
