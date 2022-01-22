<template>
  <MainApp />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainApp from "./components/MainApp.vue";

export default defineComponent({
  name: "App",
  components: {
    MainApp,
  },
});
</script>

<style>
html,
body,
div,
span,
canvas {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
