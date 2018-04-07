<template>
<div>
  <h2>Información sobre la aplicación</h2>
  <router-link :to="{ name: 'home', params: {} }">Volver al inicio</router-link>
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
