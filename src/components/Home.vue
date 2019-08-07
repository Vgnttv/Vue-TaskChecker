
<template>
  <div id="Home">
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
  </div>
</template>
<script>
</script>

<style lang="scss" scoped>
body {
  text-align: left;
  h1 {
    color: rgb(81, 84, 97);
    font-size: 2rem;
    .fa-star {
      color: rgb(231, 207, 66);
      font-size: 1.5rem;
    }
  }
  .selection {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 60%;
    h2 {
      flex: 1;
      color: rgb(110, 113, 126);
      font-size: 1.2rem;
    }
    .fa-ellipsis-h {
      color: rgb(110, 113, 126);
    }
  }
}
</style>