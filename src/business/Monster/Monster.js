import Iteractive from '../Iteractive';

export default class Monster extends Iteractive {
  check () {
    return true;
  }
  excute () {
    if (this.check()) {
      var s = this.doExcute();
      return s;
    } else {
      return Promise.reject(new Error());
    }
  }
};
