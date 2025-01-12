<template>
  <div class="card" style="width: 17rem; height: 450px">
    <img class="card-img-top" :src="pet.image" alt="Card image cap" style="height: 250px" />
    <div class="card-body">
      <h5 class="card-title">{{ pet.name }}</h5>
      <span class="badge badge-secondary">{{ pet.type }}</span>
      <p class="card-text">
        {{ pet.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
    },
  },
}
</script>

<style></style>
