
<template>
  <div class="taskBoard">
    <div class="taskContainer">
      <input
        class="enterTask"
        v-model="newTask"
        placeholder="Write your next task here"
        @keyup.enter="addNewTask"
      >
      <div v-for="task in allTasks" :key="task.id" :class="[task.completed ? 'done' : 'todo']">
        <button
          class="btn btn-outline-success btn-sm"
          v-if="task.completed !== true"
          @click="toggleTaskCompleted(task)"
        >Done</button>
        <button class="btn btn-outline-danger btn-sm" v-else @click="toggleTaskCompleted(task)">Undo</button>
        {{task.user}}<span class="regular"> created </span>"{{task.title }}"
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
  computed: mapGetters(["allTasks"], ["addTask"]),
  data() {
    return {
      newTask: "",
      idForTask: 3
    };
  },
  methods: {
    ...mapActions(["removeTask", "addTask"]),
    toggleTaskCompleted(task) {
      if (task.completed !== true) {
        task.count++;
      } else {
        task.count = 0;
      }
      task.completed = !task.completed;
    },

    addNewTask() {
      if (this.newTask.length == 0) {
        return
      }
        this.addTask({
          id: this.idForTask,
          title: this.newTask
        });
        this.newTask = "";
        this.idForTask++;
      
    
    }
  }
};
</script>

<style lang="scss" scoped>
.taskBoard {
  padding: 30px 10px 10px 10px;
  background-color: rgb(240, 240, 240);
  height: 570px;
  .taskContainer {
    background-color: rgb(255, 255, 255);
    width: 700px;
    height: 500px;
    font-size: 1rem;
    color: rgb(81, 84, 97);
    padding: 10px;
    box-shadow: 0 0 5px 2px rgb(182, 183, 187);

    .enterTask {
      width: 680px;
      border: transparent;
      padding-left: 0.5rem;
      margin-bottom: 35px;
      font-size: 1rem;
      height: 2rem;
      color: rgb(99, 97, 97);
      background-color: rgb(247, 244, 244);
      outline: none;
    }
    .todo,
    .done {
      font-size: 0.9rem;
      font-weight: bold;
      color: rgb(46, 199, 148);
      .regular {
        color: rgb(99, 97, 97);
        font-weight: 200;
        ;
      }
    }
    .done {
      text-decoration: line-through;
    }
    .btn {
      float: left;
      margin-right: 20px;
    }
    .removeTask {
      float: right;
      cursor: pointer;
      color: rgba(111, 111, 133, 0.5);
      &:hover {
        color:  rgb(46, 199, 148);
      }
    }
  }
}
</style>

  
 
