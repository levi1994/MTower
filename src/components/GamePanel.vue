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
import ItemBuilder from '../business/ItemBuilder.js';
import Code from '../constants/code.js';
import Vue from 'vue';

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
    renderItem (id) {
      let obj = ItemBuilder(id);
      return obj.render();
    },
    move (x, y) {
      let tx = +this.current[0] + x;
      let ty = +this.current[1] + y;
      if (tx < 0 || ty < 0) return;
      let target = this.map[ty][tx];
      if (target !== Code.B_WALL) {
        let row1 = this.map[+this.current[1]];
        row1[+this.current[0]] = 1;
        let row2 = this.map[ty];
        row2[tx] = 0;
        Vue.set(this.map, +this.current[1], row1);
        Vue.set(this.map, ty, row2);
      }
    }
  },
  computed: {
    current () {
      for (let y in this.map) {
        let row = this.map[y];
        for (let x in row) {
          if (row[x] === 0) {
            return [x, y];
          }
        }
      }
    }
  },
  components: {
    BlockItem
  },
  created () {
    document.onkeydown = (e) => {
      const KEY_LEFT = 37;
      const KEY_RIGHT = 39;
      const KEY_UP = 38;
      const KEY_DOWN = 40;
      const code = e.keyCode;
      console.log(code);
      if (code === KEY_LEFT) {
        this.move(-1, 0);
      } else if (code === KEY_RIGHT) {
        this.move(1, 0);
      } else if (code === KEY_UP) {
        this.move(0, -1);
      } else if (code === KEY_DOWN) {
        this.move(0, 1);
      }
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
