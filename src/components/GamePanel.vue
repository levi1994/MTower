<template>
  <div class="game-panel">
      <div v-for="(col, y) in map" class="col" :key="y">
          <div v-for="(item, x) in col" :key="x" class="block">
              <block-item :id="item" />
          </div>
      </div>
  </div>
</template>

<script>
import BlockItem from './BlockItem.vue';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      map: [
        [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
        [1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
        [2, 5, 2, 2, 1, 2, 2, 2, 1, 2, 1],
        [1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1],
        [1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1],
        [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2],
        [1, 1, 1, 2, 1, 0, 1, 2, 1, 1, 1],
        [1, 1, 1, 2, 1, 3, 1, 2, 1, 1, 1]
      ]
    }
  },
  methods: {
    renderItem () {
      return '';
    }
  },
  components: {
    BlockItem
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
    background: #797979;
    display: flex;
    flex-direction: column;
    background: url('../assets/background/bg13.png');
}
.game-panel .col {
    flex: 1;
    display: flex;
}
.col .block {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
