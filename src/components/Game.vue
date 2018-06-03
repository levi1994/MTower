<template>
  <div class="game">
    <div class="left">
      <status-panel />
    </div>
    <div class="right">
      <game-panel />
    </div>
  </div>
</template>

<script>
import StatusPanel from './StatusPanel';
import GamePanel from './GamePanel';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    StatusPanel,
    GamePanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f1f1f1;
    display: flex;
}
.left, .right {
  position: relative;
  height: 100%;
}
.left {
  width: 35%;
}
.right {
  width: 66%;
}
</style>
