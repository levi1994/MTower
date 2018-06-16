<template>
  <div class="item">
    <img :src="img" alt="">
  </div>
</template>

<script>
import Code from '../constants/code/index.js';

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
      let direction = this.$store.state.direction;

      let imgs;
      // 如果是主角，则根据状态选择图片
      if (this.blockInfo.code === 0) {
        imgs = this.blockInfo.img[direction];
      } else {
        imgs = this.blockInfo.img;
      }
      if (Array.isArray(imgs)) {
        let arrayLength = imgs.length;
        return imgs[timestamp % arrayLength];
      } else {
        return imgs;
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
