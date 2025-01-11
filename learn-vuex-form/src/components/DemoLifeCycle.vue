<template>
  <div>
    <h1>Demo Life Cycle Components</h1>
    <input ref="myInput" type="text" />
    <p>{{ count }}</p>
    <button @click="handleIncrement" class="btn btn-success">increment</button>
    <child-life-cycle v-if="count % 2 === 0"></child-life-cycle>
  </div>
</template>

<script>
import ChildLifeCycle from "./ChildLifeCycle.vue";
export default {
  components: { ChildLifeCycle },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleIncrement() {
      this.count++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate", this.count);
  },
  created() {
    console.log("created", this.count);
    this.count = 17;
  },
  beforeMount() {
    console.log("beforeMount", this.$refs.myInput);
  },
  mounted() {
    console.log("mounted", this.$refs.myInput);
    this.$refs.myInput.focus();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style>
</style>
