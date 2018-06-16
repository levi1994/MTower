import Iteractive from '../Iteractive';
import { ACTIONS } from '../../store/_constants';

export default class Thing extends Iteractive {
  constructor (info) {
    super();
    this.info = info;
  }
  excute () {
    return this.doExcute();
  }
  doExcute () {
    let person = this.$vm.$store.state.person;
    for (let k in this.info) {
      if (k === 'keys') {
        for (let k2 in this.info[k]) {
          person.keys[k2] += +this.info.keys[k2];
        }
      } else {
        person[k] += this.info[k];
      }
    }
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
};
