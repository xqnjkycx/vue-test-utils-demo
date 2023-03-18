/**
 * 轮询器 Poller
 * initStateMachine 为轮询器设置状态器
 * play 开启轮询器
 * clear 关闭并清空轮询器
 */
class Poller {
  constructor() {
    this.interval = null;
    this.statesMachine = null;
  }
  initStateMachine(states) {
    this.statesMachine = states;
  }
  setState(state, info) {
    if (!this.statesMachine[state]) {
      this.statesMachine["defalut"](info);
    } else {
      this.statesMachine[state](info);
    }
  }
  play(options) {
    const { delay, execute } = options;
    if (!this.interval) {
      this.interval = setInterval(execute, delay);
    }
  }
  clear() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

export default Poller;
