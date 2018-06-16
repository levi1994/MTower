<template>
  <div class="item">
    <img :src="img" alt="">
  </div>
</template>

<script>
import Code from '../constants/code.js';

export default {
  name: 'HelloWorld',
  props: ['blockInfo', 'timestamp'],
  data () {
    return {
      Code,
      index: 0
    }
  },
  created () {
  },
  computed: {
    img: function () {
      let timestamp = this.timestamp;
      if (Array.isArray(this.blockInfo.img)) {
        let arrayLength = this.blockInfo.img.length;
        return this.blockInfo.img[timestamp % arrayLength];
      } else {
        return this.blockInfo.img;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person {
  background: #fff;
}
.item img {
  width: 100%;
  height: 100%;
}
</style>
