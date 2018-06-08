import Iteractive from '../Iteractive';

export default class Door extends Iteractive {
  check () {
    console.log('door caculate');
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
