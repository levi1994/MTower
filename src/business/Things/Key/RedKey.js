import Things from '../Things';
import { ACTIONS } from '../../../store/_constants';

export default class RedKey extends Things {
  doExcute () {
    let person = this.$vm.$store.state.person;
    person.keys.red = person.keys.red + 1;
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
}
