<template>
  <div id="app">
    <div class="header">
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
    </div>
    <home-page></home-page>
    <footer class="footer">
      <div class="container">
        <router-link :to="{ name: 'about', params: {} }">Acerca de</router-link>
        <br/>
        <small>Fernando Ayón Suárez - 2018</small>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from '@/pages/HomePage'
export default {
  name: 'App',
  data(){
    return {
      title: 'Matcheame el candidato',
      desc: 'En tan sólo unos cuántos clics podrás saber qué candidato corresponde mejor a tus ideologías políticas.'
    }
  },
  components: {
    'home-page': Home
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1 {
  margin-top: 20px;
  font-family: 'Chicle', cursive;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
}
</style>
