<template>
  <div id="app">
    <Info/>
    <Sidebar/>
  </div>
</template>

<script>
import Info from "./components/Info.vue";
import Sidebar from "./components/layout/Sidebar.vue";

export default {
  name: "app",
  components: {
    Info,
    Sidebar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 20px;
  margin-left: 200px;
}
</style>
