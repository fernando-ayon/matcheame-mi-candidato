<template>
  <div class="start">
    <router-link :to="{ name: 'QuestionPage', params: {} }">
      <img src="../assets/icon/start.png">
      <p>Comenzar</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'StartItem'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.start img {
  width: 60%;
}
.start img:hover {
  cursor: pointer;
}
.start p {
  margin: 0;
}
</style>
