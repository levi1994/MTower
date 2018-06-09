/**
 * 可交互物体
 */
import vm from '../main';

export default class Iteractive {
  constructor () {
    // 对所有子类实例注入vue实例，使子类可以操作store
    console.log(vm);
    this.$vm = vm;
  }
  excute () {}
};
