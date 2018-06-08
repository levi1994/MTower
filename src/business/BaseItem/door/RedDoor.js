import Door from '../Door';
import { ACTIONS } from '../../../store/_constants';

export default class RedDoor extends Door {
  check () {
    let keys = this.$vm.$store.state.person.keys;
    if (keys.red > 0) {
      console.log('当前红色钥匙数位:', keys.red, ',通过校验');
      return true;
    }
    return false;
  }
  doExcute () {
    let person = this.$vm.$store.state.person;
    person.keys.red = person.keys.red - 1;
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
}
