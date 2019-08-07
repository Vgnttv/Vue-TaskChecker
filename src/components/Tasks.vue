
<template>
  <div class="taskBoard">
    <input
      class="enterTask"
      v-model="newTask"
      placeholder="Write your next task here"
      @keyup.enter="addTask"
    >
    <div v-for="(task, index) in tasks" :key="task.id" :class="[task.completed ? 'done' : 'todo']">
      <button
        class="btn btn-outline-success btn-sm"
        v-if="task.completed !== true"
        @click="toggleTaskCompleted(task)"
      >Done</button>
      <button class="btn btn-outline-danger btn-sm" v-else @click="toggleTaskCompleted(task)">Undo</button>
      {{task.title}}
      <span class="removeTask" @click="removeTask(index)">&times;</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTask: "",
      idForTask: 2,
      tasks: [
        {
          id: 1,
          title: "create todo list",
          completed: false
        }
      ]
    };
  },
  methods: {
    addTask() {
      if (this.newTask.length > 0) {
        this.tasks.push({
          id: this.idForTask,
          title: this.newTask,
          completed: false
        });
        (this.newTask = ""), this.idForTask++;
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskCompleted(task) {
      task.completed = !task.completed;
    }
  }
};
</script>

<style lang="scss" scoped>
.taskBoard {
  // margin: 0 auto;
  width: 600px;
  font-size: 1.5rem;
  border: solid 0.5px rgb(99, 97, 97);
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  overflow: hidden;

  .enterTask {
    background-color: rgb(162, 169, 177);
    background: cover;
    border: transparent;
    padding-left: 0.5rem;
    font-size: 1.7rem;
    height: 4rem;
    color: rgb(99, 97, 97);
  }
  .todo,
  .done {
    text-align: center;
  }
  .todo {
    border-top: solid 0.5px rgba(131, 131, 201, 0.5);
    padding: 15px;
    padding: 5px;
    color: rgb(99, 97, 97);
  }
  .done {
    border-top: solid 0.5px rgb(99, 97, 97);
    padding: 5px;
    text-decoration: line-through;
    color: rgb(99, 97, 97);
    background-color: rgba(131, 131, 201, 0.5);
  }

  .btn {
    float: left;
  }

  .removeTask {
    float: right;
    cursor: pointer;
    &:hover {
      color: rgba(131, 131, 201, 0.5);
    }
  }
}
</style>
