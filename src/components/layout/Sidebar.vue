<template>
  <div class="sidebar">
    <h1>tasklab.</h1>

    <nav>
      <router-link to="/">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
      </router-link>
    </nav>

    <nav>
      <router-link to="/tasks">
        <span class="icon">
          <i class="far fa-list-alt"></i>
        </span>
      </router-link>
    </nav>

    <nav>
      <router-link to="/overview">
        <span class="icon">
          <i class="fas fa-tasks"></i>
        </span>
      </router-link>
    </nav>
    <nav>
      <span class="icon">
        <i class="fas fa-piggy-bank"></i>
      </span>
    </nav>
    <nav>
      <span class="icon">
        <i class="fas fa-suitcase"></i>
      </span>
    </nav>
    <nav>
      <span class="icon">
        <i class="fas fa-cog"></i>
      </span>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
body {
  display: flex;
  width: 100%;

  .sidebar {
    text-align: center;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: rgb(81, 84, 97);
    color: #fff;
    transition: all 0.3s;
    padding: 10px;
    h1 {
      color: rgb(46, 199, 148);
    }

    .fas,
    .far {
      color: white;
      padding-top: 40px;
      font-size: 2.3rem;
      &:hover {
        color: rgb(46, 199, 148);
      }
    }
  }
}
</style>