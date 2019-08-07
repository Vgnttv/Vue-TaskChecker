<template>
  <div class="Overview">
    <div class="bar">
      <div class="checks-list">
        <div class="checks">Scoreboard</div>
        <div class="checks">
          <i class="fas fa-check"></i> num tasks checked
        </div>
        <div class="checks">
          <i class="fas fa-check-double"></i> 5 Milestones finished
        </div>
        <div class="checks">
          <i class="far fa-clock"></i> 225 hours worked
        </div>
      </div>
    </div>
    <div class="Overview-box">
      <div class="container">
        <h1>Updates</h1>
        <hr class="bold">
        <p>date person created task</p>
        <hr>
        <p>date person created task</p>
        <hr>
        <p class="green">
          All updates
          <i class="fas fa-chevron-right"></i>
        </p>
        <h1>Tasks</h1>
        <hr class="bold">
        <h2>Title green</h2>
        <p>
          <i class="far fa-check-circle"></i> mini task in the task
        </p>
        <hr>
        <p>
          <i class="far fa-check-circle"></i> mini task in the task
        </p>
        <hr>
        <h2>Title green</h2>
        <p>
          <i class="far fa-check-circle"></i> mini task in the task
        </p>
        <hr>
        <p>
          <i class="far fa-check-circle"></i> mini task in the task
        </p>
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style lang="scss" scoped>
.Overview {
  padding-left: 10px;
  box-shadow: 0px -15px 10px -15px rgb(198, 198, 199);
  background-color: rgb(240, 240, 240);
  .bar {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-evenly;
    width: 700px;
    .checks-list {
      margin: 10px 0 10px 0;
      display: flex;
      flex-direction: row;
      .checks {
        flex: 1;
        font-size: 1rem;
      }
    }
  }
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
      //  margin-top: 0.1rem;
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