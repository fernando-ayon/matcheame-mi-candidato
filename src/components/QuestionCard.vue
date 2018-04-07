<template>
  <div class="card">
    <div class="content">
      <img src="../assets/icon/question.png">
      <h3>{{ tema }}</h3>
      <p>{{ pregunta }}</p>
      <div class="pull-down">
        <button class="btn btn-outline-success">Sí</button>
        <button class="btn btn-outline-danger">No</button>
        <button class="btn btn-outline-secondary">¿Qué?</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionItem',
  data () {
    return {
      tema: 'Aborto',
      pregunta: '¿De manera general, estás de acuerdo con el aborto?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 20px;
}
.content {
  height: 100%;
}
.pull-down {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
}
button{
  margin: 5px;
}
</style>
