import YellowDoor from '../../business/BaseItem/door/YellowDoor';
import BlueDoor from '../../business/BaseItem/door/BlueDoor';
import RedDoor from '../../business/BaseItem/door/RedDoor';

export default {
  B_PERSON: {
    code: 0,
    img: [
      [
        require('../../assets/person/p5.png'),
        require('../../assets/person/p6.png'),
        require('../../assets/person/p7.png'),
        require('../../assets/person/p8.png')
      ],
      [
        require('../../assets/person/p9.png'),
        require('../../assets/person/p10.png'),
        require('../../assets/person/p11.png'),
        require('../../assets/person/p12.png')
      ],
      [
        require('../../assets/person/p13.png'),
        require('../../assets/person/p14.png'),
        require('../../assets/person/p15.png'),
        require('../../assets/person/p16.png')
      ],
      [
        require('../../assets/person/p1.png'),
        require('../../assets/person/p2.png'),
        require('../../assets/person/p3.png'),
        require('../../assets/person/p4.png')
      ]
    ]
  },
  B_SPACE: {
    code: 1,
    img: require('../../assets/background/bg13.png')
  },
  B_WALL: {
    code: 2,
    img: require('../../assets/background/bg7.png')
  },
  B_STAIR_DOWN: {
    code: 3,
    img: require('../../assets/background/bg15.png')
  },
  B_STAIR_UP: {
    code: 4,
    img: require('../../assets/background/bg16.png')
  },
  B_DOOR_YELLOW: {
    code: 5,
    img: require('../../assets/door/d5.png'),
    business: new YellowDoor()
  },
  B_DOOR_BLUE: {
    code: 6,
    img: require('../../assets/door/d7.png'),
    business: new BlueDoor()
  },
  B_DOOR_RED: {
    code: 7,
    img: require('../../assets/door/d7.png'),
    business: new RedDoor()
  },

}
