<template>
  <div id="app">
    
    <Info/>
    <Sidebar/>
    <Tasks/>
  </div>
</template>

<script>

import Info from "./components/Info.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import Tasks from "./components/Tasks.vue";


export default {
  name: "app",
   components: {
     Info,
    Sidebar,
    // Tasks,
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
