
<template>
  <div class="Home">
    <h1>
      Rentsafe
      <i class="fas fa-star"></i>
    </h1>
    <div class="selection">
      <h2>Owerview</h2>
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
          <div class="checks">Scoreboard</div>
          <div class="checks">
            <i class="fas fa-check"></i> num tasks checked
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
  </div>
</template>
<script>
export default {
  name: "Home"
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
        margin: 10px 0 10px 0;
        display: flex;
        flex-direction: row;
        .checks {
          flex: 1;
          font-size: 0.75rem;
          .fas,
          .far {
            color: rgb(46, 199, 148);
          }
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