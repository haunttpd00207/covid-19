<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WolrdMap/>
  </div>
</template>

<script>
import WolrdMap from './components/WolrdMap.vue'

export default {
  name: 'App',
  components: {
    WolrdMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
