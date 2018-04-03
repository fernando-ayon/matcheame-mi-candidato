<template>
  <div class="card">
    <QuestionItem />
  </div>
</template>

<script>
import QuestionItem from '@/components/QuestionItem'

export default {
  name: 'QuestionPage',
  components: {
    QuestionItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  margin: 0 auto;
  padding: 20px;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.card:hover {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.4);
}
@media all and (max-width: 991px) {
  .card {
    width: 95%;
  }
}
</style>
