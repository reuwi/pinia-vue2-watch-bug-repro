<template>
  <div id="app">
    hello pinia
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import store from "./store";
// Import the styles too, typically in App.vue or main.js
import "vue-swatches/dist/vue-swatches.css";

export default {
  name: "App",
  watch: {
    lol: {
      deep: true,
      immediate: false,
      handler() {
        alert('lol changed');
      },
    },
  },
  data: () => ({
    color: "#f00",
    swatches: ["#f00", "#ccff00", "#eee", "#0f0"],
  }),
  computed: {
    ...mapState(store, ["lol", "bar"]),
  },
  methods: {
    ...mapActions(store, ["setBar"]),
  },
  created() {
    console.log(this.$watch)
    this.setBar({});
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
