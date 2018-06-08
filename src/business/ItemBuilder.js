import Code from '../constants/code.js';
import Brick from './BaseItem/Brick';
import YellowDoor from './BaseItem/door/YellowDoor';

export default function (id) {
  switch (id) {
    case Code.B_WALL:
      return new Brick();
    case Code.B_DOOR_YELLOW:
      return new YellowDoor();
    default:
      return new Brick();
  }
};
