<template>
<div>
  <h2>No pudimos encontrar la página que estabas buscando, talvez quieras
    <router-link :to="{ path: '/', params: {} }">volver al inicio ?</router-link>
  </h2>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
  margin-top: 50px;
}
</style>
