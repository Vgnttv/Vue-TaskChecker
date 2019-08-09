<template>
  <div class="home">
    <div class="container">
      <h1>
        Welcome to
        <span>tasklab.</span>
      </h1>
      <p>Our main goal is to help you and your team become more efficient, and share information about your progress in real-time</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
  background-color: rgb(240, 240, 240);
  width: 1250px;
  height: 600px;
  padding: 30px 10px 10px 10px;
  .container {
    background-color: rgb(255, 255, 255);
    width: 700px;
    height: 200px;
    font-size: 1rem;
    color: rgb(81, 84, 97);
    padding: 30px 10px 10px 10px;
    box-shadow: 0 0 5px 2px rgb(182, 183, 187);
    text-align: center;
    position: absolute;
    h1 {
      font-weight: 400;
      margin-bottom: 20px;
      span {
        font-weight: 500;
        color: rgb(46, 199, 148);
      }
    }
    p {
      line-height: 2;
    }
  }
}
</style>
