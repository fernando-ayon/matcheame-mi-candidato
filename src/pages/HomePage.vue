<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import QuestionItem from '@/components/QuestionCard'
import StartItem from '@/components/StartCard'
export default {
  name: 'HomePage',
  data(){
    return {
      currentComponent: StartItem
    }
  },
  components: {
    StartItem,
    QuestionItem
  },
  watch: {
    '$route' (to, from) {
      console.log(to.path);
    /*{
        fullpath: "/question/1",
        hash:"",
        matched:[{…}],
        meta:{},
        name:"Question",
        params: {id: "1"},
        path: "/question/1",
        query: {}
      }*/
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
}
.card {
  width: 95%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
@media all and (min-width: 1224px) {
  .card {
    width: 70%;
  }
}
</style>
