import Code from '../constants/code.js';
import YellowDoor from './BaseItem/door/YellowDoor';

export default function (id) {
  switch (id) {
    case Code.B_DOOR_YELLOW:
      return new YellowDoor();
    default:
      return false;
  }
};
