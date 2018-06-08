<template>
  <div class="status-panel">
    <div class="floor">
      <div>第一层</div>
      <div>Lv0</div>
    </div>
    <div class="status">
      <div>
        <span>生命值</span>
        <span>{{ person.hp }}</span>
      </div>
      <div>
        <span>攻击力</span>
        <span>{{ person.attack }}</span>
      </div>
      <div>
        <span>防御力</span>
        <span>{{ person.defense }}</span>
      </div>
      <div>
        <span>经验值</span>
        <span>{{ person.xp }}</span>
      </div>
      <div>
        <span>金币</span>
        <span>{{ person.money }}</span>
      </div>
    </div>
    <div class="keys">
      <div>
        <img src="../assets/keys/k1.png" alt="">
        <span>{{ person.keys.yellow }}把</span>
      </div>
      <div>
        <img src="../assets/keys/k2.png" alt="">
        <span>{{ person.keys.blue }}把</span>
      </div>
      <div>
        <img src="../assets/keys/k3.png" alt="">
        <span>{{ person.keys.red }}把</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    person () {
      return this.$store.state.person
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status-panel {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background: url('../assets/background/bg2.png');
    padding: 3rem 5rem;
    color: #fff;
    box-sizing: border-box;
}
.floor {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.status > div {
  display: flex;
  justify-content: space-between;
  margin-top: .4rem;
}
.status > img,.status span {
  display: block;
}
.keys {
  margin-top: 2rem;
}
.keys div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
