<template>
  <div class="sidebar">
    <h1>tasklab.</h1>
    <div>
      <span class="icon">
        <i class="fas fa-home"></i>
      </span>
    </div>
    <div>
      <span class="icon">
        <i class="fas fa-list"></i>
      </span>
    </div>
    <div>
      <span class="icon">
        <i class="fas fa-tasks"></i>
      </span>
    </div>
    <div>
      <span class="icon">
        <i class="fas fa-piggy-bank"></i>
      </span>
    </div>
    <div>
      <span class="icon">
        <i class="fas fa-suitcase"></i>
      </span>
    </div>
    <div>
      <span class="icon">
        <i class="fas fa-cog"></i>
      </span>
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
body {
  display: flex;
  width: 100%;
}

.sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: rgb(81, 84, 97);
  color: #fff;
  transition: all 0.3s;
  padding: 10px;
}
h1 {
  color: rgb(46, 199, 148);
}
</style>