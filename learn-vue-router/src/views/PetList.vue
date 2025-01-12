<template>
  <div class="mr-5 ml-4">
    <h2 class="text-center text-primary">Pet List</h2>
    <div class="pet-list row">
      <div v-for="(pet, index) in petList" :key="index" class="col-lg-2 mb-2">
        <pet-item :pet="pet"></pet-item>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import PetItem from '../components/PetItem.vue'
const { mapState } = createNamespacedHelpers('pets')
export default {
  components: { PetItem },
  computed: {
    ...mapState({
      petList: (state) => state.petList,
    }),
  },
}
</script>

<style>
</style>
