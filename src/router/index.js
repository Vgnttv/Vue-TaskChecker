import Vue from "vue";
import Router from "vue-router";
import Tasks from "../components/Tasks.vue";
import Overview from "../components/Overview.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/tasks",
      name: "Tasks",
      component: Tasks
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview
    }
  ]
});
