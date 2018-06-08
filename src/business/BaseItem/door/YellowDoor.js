import Door from '../Door';

export default class YellowDoor extends Door {
  caculate () {
    console.log('Yellow Door Caculate');
    return true;
  }
}
