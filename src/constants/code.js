import YellowDoor from '../business/BaseItem/door/YellowDoor';
import BlueDoor from '../business/BaseItem/door/BlueDoor';
import RedDoor from '../business/BaseItem/door/RedDoor';
import YellowKey from '../business/Things/Key/YellowKey';
import BlueKey from '../business/Things/Key/BlueKey';
import RedKey from '../business/Things/Key/RedKey';
import RedPotion from '../business/Things/Potion/RedPotion';
import BluePotion from '../business/Things/Potion/BluePotion';

export default {
  /**
   * 0 - 99 为基础素材（墙壁，门，楼梯，npc等等）
   */
  // 主角
  B_PERSON: {
    code: 0,
    img: require('../assets/person/p1.png')
  },
  // B_PERSON: 0, // 主角
  B_SPACE: {
    code: 1,
    img: require('../assets/background/bg13.png')
  },
  B_WALL: {
    code: 2,
    img: require('../assets/background/bg7.png')
  },
  B_STAIR_DOWN: {
    code: 3,
    img: require('../assets/background/bg15.png')
  },
  B_STAIR_UP: {
    code: 4,
    img: require('../assets/background/bg16.png')
  },
  B_DOOR_YELLOW: {
    code: 5,
    img: require('../assets/door/d5.png'),
    business: new YellowDoor()
  },
  B_DOOR_BLUE: {
    code: 6,
    img: require('../assets/door/d7.png'),
    business: new BlueDoor()
  },
  B_DOOR_RED: {
    code: 7,
    img: require('../assets/door/d7.png'),
    business: new RedDoor()
  },

  /**
   * 100 - 1000 为资源或奖励（剑、盾、药水等等）
   */
  // 黄色钥匙
  B_KEY_YELLOW: {
    code: 100,
    img: require('../assets/keys/k1.png'),
    business: new YellowKey()
  },
  // 蓝色钥匙
  B_KEY_BLUE: {
    code: 101,
    img: require('../assets/keys/k2.png'),
    business: new BlueKey()
  },
  // 红色钥匙
  B_KEY_RED: {
    code: 102,
    img: require('../assets/keys/k3.png'),
    business: new RedKey()
  },

  // 红色药水
  B_POTION_RED: {
    code: 110,
    img: require('../assets/things/t1.png'),
    business: new RedPotion()
  },
  // 蓝色药水
  B_POTION_BLUE: {
    code: 111,
    img: require('../assets/things/t2.png'),
    business: new BluePotion()
  },

  // 红色宝石
  B_DIAMOND_RED: {
    code: 120,
    img: require('../assets/deamon/d1.png')
  },
  // 蓝色宝石
  B_DIAMOND_BLUE: {
    code: 121,
    img: require('../assets/deamon/d2.png')
  },

  // 剑（普通）
  B_SWORD: {
    code: 130,
    img: require('../assets/things/t9.png')
  },

  // 1000 - 2000 为怪物
  // 绿头怪
  B_GREEN_HEAD: {
    code: 1000,
    img: require('../assets/monster/green_head.png'),
    info: {
      hp: 100,
      attack: 5,
      defense: 5
    }
  },
  // 红头怪
  B_RED_HEAD: {
    code: 1000,
    img: require('../assets/monster/green_head.png'),
    info: {
      hp: 100,
      attack: 5,
      defense: 5
    }
  },
  // 黑头怪
  B_BLACK_HEAD: {
    code: 1000,
    img: require('../assets/monster/green_head.png'),
    info: {
      hp: 100,
      attack: 5,
      defense: 5
    }
  },
  // 骷髅人
  B_SKULL_MEN: {
    code: 1000,
    img: require('../assets/monster/green_head.png'),
    info: {
      hp: 100,
      attack: 5,
      defense: 5
    }
  }
};
