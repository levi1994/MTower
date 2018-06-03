<template>
  <div class="game-panel">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-panel {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background: #ddd;
}
</style>
