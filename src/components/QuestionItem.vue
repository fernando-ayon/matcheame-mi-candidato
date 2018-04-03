<template>
  <div class="content">
    <img src="../assets/icon/question.png">
    <h2>{{ theme }}</h2>
    <p>{{ question }}</p>
    <button>SI</button>
    <button>NO</button>
    <button>¿QUÉ?</button>
  </div>
</template>

<script>
export default {
  name: 'QuestionItem',
  data () {
    return {
      theme: 'Aborto',
      question: 'De manera general, ¿estás de acuerdo con el aborto?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
