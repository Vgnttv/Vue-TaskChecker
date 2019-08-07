<template>
  <div id="app">
   <Home/>
    <router-view></router-view>
    <Sidebar/>
  </div>
</template>

<script>
// import Tasks from "./components/Tasks.vue";
import Home from "./components/Home.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Sidebar, Home
   
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 20px;
  background-color: white;
  margin-left: 200px;
}
</style>
