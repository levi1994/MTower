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
<style>
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

.person {
  background: #fff;
}
.space {
  background: url('../assets/background/bg13.png') no-repeat;
  background-size: 100% 100%;
}
.wall {
  background: url('../assets/background/bg7.png') no-repeat;
  background-size: 100% 100%;
}
.stair-down {
  background: url('../assets/background/bg15.png') no-repeat;
  background-size: 100% 100%;
}
.stair-up {
  background: url('../assets/background/bg16.png') no-repeat;
  background-size: 100% 100%;
}
.item {
  width: 100%;
  height: 100%;
}
.door_yellow {
  background: url('../assets/door/d5.png') no-repeat;
  background-size: 100% 100%;
}
</style>
