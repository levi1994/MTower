import YellowKey from '../../business/Things/Key/YellowKey';
import BlueKey from '../../business/Things/Key/BlueKey';
import RedKey from '../../business/Things/Key/RedKey';
import RedPotion from '../../business/Things/Potion/RedPotion';
import BluePotion from '../../business/Things/Potion/BluePotion';

export default {
  /**
   * 100 - 1000 为资源或奖励（剑、盾、药水等等）
   */
  // 黄色钥匙
  B_KEY_YELLOW: {
    code: 100,
    img: require('../../assets/keys/k1.png'),
    business: new YellowKey()
  },
  // 蓝色钥匙
  B_KEY_BLUE: {
    code: 101,
    img: require('../../assets/keys/k2.png'),
    business: new BlueKey()
  },
  // 红色钥匙
  B_KEY_RED: {
    code: 102,
    img: require('../../assets/keys/k3.png'),
    business: new RedKey()
  },

  // 红色药水
  B_POTION_RED: {
    code: 110,
    img: require('../../assets/things/t1.png'),
    business: new RedPotion()
  },
  // 蓝色药水
  B_POTION_BLUE: {
    code: 111,
    img: require('../../assets/things/t2.png'),
    business: new BluePotion()
  },

  // 红色宝石
  B_DIAMOND_RED: {
    code: 120,
    img: require('../../assets/deamon/d1.png')
  },
  // 蓝色宝石
  B_DIAMOND_BLUE: {
    code: 121,
    img: require('../../assets/deamon/d2.png')
  },

  // 剑（普通）
  B_SWORD: {
    code: 130,
    img: require('../../assets/things/t9.png')
  },
}
