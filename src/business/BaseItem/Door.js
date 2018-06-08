import Iteractive from '../Iteractive';

export default class Door extends Iteractive {
  caculate () {
    console.log('door caculate');
  }
  moveIn () {
    if (this.caculate()) {
      console.log('计算成功');
      return true;
    }
  }
};
