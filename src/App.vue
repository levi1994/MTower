<template>
  <div id="app">
    <game />
  </div>
</template>

<script>
import Home from './components/Home';
import Game from './components/Game';

export default {
  name: 'App',
  components: {
    Home,
    Game
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
