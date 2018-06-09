import Things from '../Things';
import { ACTIONS } from '../../../store/_constants';

export default class BluePotion extends Things {
  constructor () {
    super();
    this.value = 500;
  }
  doExcute () {
    let person = this.$vm.$store.state.person;
    person.hp = person.hp + this.value;
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
}
