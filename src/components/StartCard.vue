<template>
  <div class="start card">
    <router-link :to="{ name: 'question', params: { id: '1' } }">
      <button type="button" class="btn btn-outline-success">
        <img src="../assets/icon/start.png"><p>{{ start }}</p>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'StartItem',
  data(){
    return {
      start: 'Comenzar'
    }
  }
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
