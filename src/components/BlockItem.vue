<template>
  <div class="item">
    <img :src="blockInfo.img" alt="">
  </div>
</template>

<script>
import Code from '../constants/code.js';

export default {
  name: 'HelloWorld',
  props: ['blockInfo'],
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
.item img {
  width: 100%;
  height: 100%;
}
</style>
