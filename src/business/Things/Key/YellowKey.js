import Things from '../Things';
import { ACTIONS } from '../../../store/_constants';

export default class YellowKey extends Things {
  doExcute () {
    let person = this.$vm.$store.state.person;
    person.keys.yellow = person.keys.yellow + 1;
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
}
