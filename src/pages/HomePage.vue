<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <p>{{ desc }}</p>
    <QuestionPage />
  </div>
</template>

<script>
import QuestionPage from '@/pages/QuestionPage'
export default {
  name: 'HomePage',
  components: {
    QuestionPage
  },
  data () {
    return {
      title: 'Matcheame el candidato',
      desc: 'En tan sólo unos cuántos clics podrás saber qué candidato corresponde mejor a tus ideologías políticas.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Chicle', cursive;
}
</style>
