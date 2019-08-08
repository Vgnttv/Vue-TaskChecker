
<template>
  <div class="taskBoard">
    <div class="taskContainer">
      
      <input
        class="enterTask"
        v-model="newTask"
        placeholder="Write your next task here"
        @keyup.enter="newTask"
      >
      <div
        v-for="(task, index) in allTasks"
        :key="task.id"
        :class="[task.completed ? 'done' : 'todo']"
      >
        <button
          class="btn btn-outline-success btn-sm"
          v-if="task.completed !== true"
          @click="toggleTaskCompleted(task)"
        >Done</button>
        <button class="btn btn-outline-danger btn-sm" v-else @click="toggleTaskCompleted(task)">Undo</button>
        {{task.title }} by
        <span class="green">{{task.user}}</span>
        <span class="removeTask" @click="removeTask(task.id)">&times;</span>
        <hr>
      </div>
    </div> 
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Tasks",
   computed: mapGetters(["allTasks"]),
  data() {
    return {
      newTask: "",
      idForTask: 3
    };
  },
  methods: {
    ...mapActions(["addTask", "removeTask"]),
    // removeTask(index) {
    //   this.tasks.splice(index, 1);
    // },
    toggleTaskCompleted(task) {
      if (task.completed !== true) {
        task.count++;
      } else {task.count=0}
      task.completed = !task.completed;
    }
  }
};
</script>

<style lang="scss" scoped>
.taskBoard {
  padding: 30px 10px 10px 10px;
  background-color: rgb(240, 240, 240);
  .taskContainer {
    background-color: rgb(255, 255, 255);
    width: 700px;
    height: 550px;
    font-size: 1rem;
    color: rgb(81, 84, 97);
    padding: 10px;
    box-shadow: 0 0 5px 2px rgb(182, 183, 187);

    .enterTask {
      width: 680px;
      border: transparent;
      padding-left: 0.5rem;
      margin-bottom: 10px;
      font-size: 1rem;
      height: 2rem;
      color: rgb(99, 97, 97);
      background-color: rgb(247, 244, 244);
    }
    .todo,
    .done {
      text-align: center;
      color: rgb(99, 97, 97);
      .green {
        color: rgb(46, 199, 148);
      }
    }
    .done {
      text-decoration: line-through;
    }
    .btn {
      float: left;
    }
    .removeTask {
      float: right;
      cursor: pointer;
      &:hover {
        color: rgba(111, 111, 133, 0.5);
      }
    }
  }
}
</style>
