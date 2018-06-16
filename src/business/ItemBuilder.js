import Code from '../constants/code/index';
import YellowDoor from './BaseItem/door/YellowDoor';
import BlueDoor from './BaseItem/door/BlueDoor';
import RedDoor from './BaseItem/door/RedDoor';
import YellowKey from './Things/Key/YellowKey';
import BlueKey from './Things/Key/BlueKey';
import RedKey from './Things/Key/RedKey';
import RedPotion from './Things/Potion/RedPotion';
import BluePotion from './Things/Potion/BluePotion';

export default function (id) {
  switch (id) {
    case Code.B_DOOR_YELLOW.code:
      return new YellowDoor();
    case Code.B_DOOR_BLUE.code:
      return new BlueDoor();
    case Code.B_DOOR_RED.code:
      return new RedDoor();
    case Code.B_KEY_YELLOW.code:
      return new YellowKey();
    case Code.B_KEY_BLUE.code:
      return new BlueKey();
    case Code.B_KEY_RED.code:
      return new RedKey();
    case Code.B_POTION_RED.code:
      return new RedPotion();
    case Code.B_POTION_BLUE.code:
      return new BluePotion();
    default:
      return false;
  }
};
