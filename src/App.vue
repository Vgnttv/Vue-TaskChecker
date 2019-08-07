<template>
  <div id="app">
    <Home v-bind:tasks="tasks"/>
    <router-view></router-view>
    <Sidebar/>
    <Tasks v-bind:tasks="tasks"/>
   
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Sidebar from "./components/Sidebar.vue";
import Tasks from "./components/Tasks.vue";
import Overview from "./components/Overview.vue";

export default {
  name: "app",
   components: {
    Sidebar,
    Home,
    Tasks,
    Overview
  }, 
  data: function() {
    return {
      tasks: [
        {
          id: 1,
          title: "Finish assignment",
          user: "Angela",
          completed: false,
          count:0
        },
        {
          id: 2,
          title: "Implementing add feature",
          user: "Oscar",
          completed: false,
          count: 0
        }
      ]
    };
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
