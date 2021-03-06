import Door from '../Door';
import { ACTIONS } from '../../../store/_constants';

export default class YellowDoor extends Door {
  check () {
    let keys = this.$vm.$store.state.person.keys;
    if (keys.yellow > 0) {
      console.log('当前黄色钥匙数位:', keys.yellow, ',通过校验');
      return true;
    }
    return false;
  }
  doExcute () {
    let person = this.$vm.$store.state.person;
    person.keys.yellow = person.keys.yellow - 1;
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
}
