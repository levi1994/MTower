import Code from '../constants/code.js';
import Brick from './BaseItem/Brick';

export default function (id) {
  switch (id) {
    case Code.B_WALL:
      return new Brick();
    default:
      return new Brick();
  }
};
