<template>
  <div id="app">
  <Sidebar/>
  <Tasks/>
  </div>
</template>

<script>
import Tasks from "./components/Tasks.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Sidebar, Tasks
  },
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
  background-image: url("https://wpmisc.com/sites/default/files/wallpaper/nature/71708/calm-sunset-hd-wallpapers-71708-8553904.png");
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%;
}
</style>
