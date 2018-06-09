import Things from '../Things';
import { ACTIONS } from '../../../store/_constants';

export default class BlueKey extends Things {
  doExcute () {
    let person = this.$vm.$store.state.person;
    person.keys.blue = person.keys.blue + 1;
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
}
