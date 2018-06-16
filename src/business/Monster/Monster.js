import Iteractive from '../Iteractive';
import { ACTIONS } from '../../store/_constants';

export default class Monster extends Iteractive {
  constructor (info) {
    console.log('info');
    console.log(info);
    super();
    this.hp = info.hp;
    this.attack = info.attack;
    this.defense = info.defense;
  }
  excute () {
    if (this.check()) {
      var s = this.doExcute();
      return s;
    } else {
      return Promise.reject(new Error());
    }
  }
  caculateDamage () {
    let person = this.$vm.$store.state.person;
    let attackDiff = person.attack - this.attack;
    let defenseDiff = person.defense - this.defense;
    let deltaAttack = Math.pow(attackDiff, 2) * attackDiff / Math.abs(attackDiff);
    let deltaDefense = Math.pow(defenseDiff, 2) * defenseDiff / Math.abs(defenseDiff);
    let he = deltaAttack + deltaDefense;
    let damage = this.hp / he;

    console.log(damage);
    return damage;
  }
  check () {
    let person = this.$vm.$store.state.person;
    let caculateDamage = this.caculateDamage();
    if (caculateDamage > person.hp) {
      return false;
    }
    return true;
  }
  doExcute () {
    let person = this.$vm.$store.state.person;
    console.log(person.hp);
    console.log(this.caculateDamage());
    person.hp = person.hp - this.caculateDamage();
    return this.$vm.$store.dispatch(ACTIONS.CHANGE_PERSON, person);
  }
};
