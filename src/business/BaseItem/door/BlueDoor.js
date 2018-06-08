import Door from '../Door';
import { ACTIONS } from '../../../store/_constants';

export default class BlueDoor extends Door {
  check () {
    let keys = this.$vm.$store.state.person.keys;
    if (keys.blue > 0) {
      console.log('当前红色钥匙数位:', keys.blue, ',通过校验');
      return true;
    }
    return false;
  }
  doExcute () {
    let person = this.$vm.$store.state.person;
    person.keys.blue = person.keys.blue - 1;
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
}
