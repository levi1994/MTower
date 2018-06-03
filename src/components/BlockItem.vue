<template>
  <div v-if="id === Code.B_PERSON" class="item person">
  </div>
  <div v-else-if="id === Code.B_SPACE" class="item space">
  </div>
  <div v-else-if="id === Code.B_WALL" class="item wall">
  </div>
  <div v-else-if="id === Code.B_STAIR_DOWN" class="item stair-down">
  </div>
  <div v-else-if="id === Code.B_STAIR_UP" class="item stair-up">
  </div>
  <div v-else-if="id === Code.B_DOOR_YELLOW" class="item door_yellow">
  </div>
  <div v-else-if="id === Code.B_DOOR_BLUE" class="item door_blue">
  </div>
  <div v-else-if="id === Code.B_DOOR_RED" class="item door_red">
  </div>
</template>

<script>
import Code from '../constants/code.js';

export default {
  name: 'HelloWorld',
  props: ['id'],
  data () {
    return {
      Code
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
