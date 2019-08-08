
<template>
  <div class="Home">
    <h1>
      Rentsafe
      <i class="fas fa-star"></i>
    </h1>
    <div class="selection">
      <h2>Overview</h2>
      <h2>Tasks</h2>
      <h2>Activity</h2>
      <h2>Management</h2>
      <h2>
        <i class="fas fa-ellipsis-h"></i>
      </h2>
    </div>
    <div class="bar">
      <div class="bar-checks">
        <div class="checks-list">
          <div class="checks percentage">{{percentage}}%</div>
          <div class="checks">
            <i class="fas fa-check"></i>
            {{total}} tasks checked
          </div>
          <div class="checks">
            <i class="fas fa-check-double"></i> 5 Milestones finished
          </div>
          <div class="checks">
            <i class="far fa-clock"></i> 95 hours worked
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Info",
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  computed: {
    total: function() {
      return this.tasks.reduce(function(previous, current) {
        return previous + current.count;
      }, 0);
    },
    percentage: function() {
      let completed = this.tasks.filter(task => task.count == 1).length;
      let notCompleted = this.tasks.filter(task => task.count == 0).length;
      let totalValue = completed + notCompleted;
      return Math.floor((100 * completed) / totalValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.Home {
  text-align: left;
  .bar {
    padding-left: 10px;
    background-color: rgb(240, 240, 240);
    box-shadow: 0px -15px 10px -15px rgb(198, 198, 199);
    .bar-checks {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-evenly;
      width: 550px;
      .checks-list {
        margin-top: 10px;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        .checks {
         
          flex: 2;
          font-size: 0.75rem;

          .fas,
          .far {
            color: rgb(46, 199, 148);
          }
        }
        .percentage {
          flex: 1;
          font-weight: 800;
        }
      }
    }
  }

  h1 {
    padding-left: 10px;
    color: rgb(81, 84, 97);
    font-size: 2rem;
    .fa-star {
      color: rgb(231, 207, 66);
      font-size: 1.5rem;
    }
  }
  .selection {
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 60%;

    h2 {
      flex: 1;
      color: rgb(81, 84, 97);
      font-size: 1.2rem;
    }
    .fa-ellipsis-h {
      color: rgb(81, 84, 97);
    }
  }
}
</style>