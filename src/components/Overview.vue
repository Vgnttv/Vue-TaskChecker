<template>
  <div class="Overview">
<h1>Hello</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTask: "",
      idForTask: 3,
      tasks: [
        {
          id: 1,
          title: "Finish assignment",
          user:"Angela",
          completed: false
        },
        {
          id: 2,
          title: "Implementing add feature",
          user:"Oscar",
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
          user: "Ottavia",
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
.Overview {
  // margin: 0 auto;
  width: 600px;
  font-size: 1.5rem;
  border: solid 0.5px rgb(99, 97, 97);
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  overflow: hidden;

  
}
</style>