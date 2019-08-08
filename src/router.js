import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/overview",
      name: "Overview",
      component: () => import("./components/Overview.vue"),
      props: true
    },
    // {
    //   path: "/tasks",
    //   name: "Tasks",
    //   component: () => import("./components/Tasks.vue"),
    //   props: true
    // }
  ]
});
 