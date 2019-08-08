<template>
  <div class="Overview">
    <div class="Overview-box">
      <div class="container">
        <h1>Updates</h1>
        <hr class="bold">
        <div v-for="task in allTasks" :key="task.id">
          <p>date {{task.user}} created {{task.title}}</p>
          <hr>
        </div>
      
        <p class="green">
          All updates
          <i class="fas fa-chevron-right"></i>
        </p>
        <h1>Tasks</h1>
        <hr class="bold">
        <div v-for="task in allTasks" :key="task.title">
          <h2>{{task.title}}</h2>
          <p>
            <i class="far fa-check-circle"></i> {{task.mini}} 
          </p>
          <hr>
          <p>
            <i class="far fa-check-circle"></i> mini task in the task
          </p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Overview",
  computed: {...mapGetters(["allTasks", "returnMini"])}
};
</script>

<style lang="scss" scoped>
.Overview {
  padding: 30px 10px 10px 10px;
  background-color: rgb(240, 240, 240);
  height: 570px;

  .Overview-box {
    background-color: rgb(255, 255, 255);
    width: 700px;
    font-size: 1.5rem;
    color: rgb(81, 84, 97);
    padding: 10px;
    box-shadow: 0 0 5px 2px rgb(182, 183, 187);

    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.3rem;
      color: rgb(46, 199, 148);
    }
    p {
      font-size: 1.1rem;
    }
    .green {
      color: rgb(46, 199, 148);
      .fa-chevron-right {
        font-size: 0.6rem;
      }
    }
    hr {
      margin-bottom: 0.1rem;
    }
    .bold {
      display: block;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      overflow: hidden;
      border-style: inset;
      border-width: 1px;
      background-color: rgb(33, 34, 33);
    }
  }
}
</style>