import Code from '../constants/code/index.js';

export default {
  name: 'lichun',
  map: [
    [Code.B_STAIR_UP, Code.B_SPACE, Code.B_KEY_YELLOW, Code.B_GREEN_HEAD, Code.B_GREEN_HEAD, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE],
    [Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_SPACE],
    [Code.B_POTION_RED, Code.B_SPACE, Code.B_SPACE, Code.B_DOOR_YELLOW, Code.B_SPACE, Code.B_WALL, Code.B_POTION_RED, Code.B_KEY_YELLOW, Code.B_POTION_RED, Code.B_WALL, Code.B_SPACE],
    [Code.B_KEY_YELLOW, Code.B_SPACE, Code.B_SPACE, Code.B_WALL, Code.B_SPACE, Code.B_WALL, Code.B_POTION_RED, Code.B_KEY_YELLOW, Code.B_POTION_RED, Code.B_WALL, Code.B_SPACE],
    [Code.B_WALL, Code.B_DOOR_YELLOW, Code.B_WALL, Code.B_WALL, Code.B_SPACE, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_SPACE, Code.B_WALL, Code.B_SPACE],
    [Code.B_KEY_YELLOW, Code.B_SPACE, Code.B_SPACE, Code.B_WALL, Code.B_SPACE, Code.B_DOOR_YELLOW, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_WALL, Code.B_SPACE],
    [Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_WALL, Code.B_SPACE, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_SPACE],
    [Code.B_WALL, Code.B_DOOR_YELLOW, Code.B_WALL, Code.B_WALL, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_SPACE],
    [Code.B_SPACE, Code.B_SPACE, Code.B_SPACE, Code.B_WALL, Code.B_WALL, Code.B_DOOR_RED, Code.B_WALL, Code.B_WALL, Code.B_WALL, Code.B_DOOR_YELLOW, Code.B_WALL],
    [Code.B_POTION_RED, Code.B_POTION_BLUE, Code.B_KEY_YELLOW, Code.B_WALL, Code.B_KEY_RED, Code.B_PERSON, Code.B_SPACE, Code.B_WALL, Code.B_KEY_YELLOW, Code.B_SPACE, Code.B_KEY_BLUE],
    [Code.B_POTION_RED, Code.B_SWORD, Code.B_KEY_YELLOW, Code.B_WALL, Code.B_SPACE, Code.B_STAIR_DOWN, Code.B_SPACE, Code.B_WALL, Code.B_KEY_YELLOW, Code.B_KEY_YELLOW, Code.B_KEY_YELLOW]
  ],
  person: {
    hp: 1000,
    xp: 0,
    money: 0,
    level: 0,
    attack: 10,
    defense: 10,
    keys: {
      red: 1,
      blue: 1,
      yellow: 1
    }
  },
  direction: 0
};
