// 非状态模式下的代码
// class Light {
//   constructor() {
//     this.state = "关闭";
//     this.button = null;
//   }
//   init() {
//     let buttonDom = document.createElement("button");
//     buttonDom.innerHTML = "开关";
//     const self = this;
//     buttonDom.addEventListener("click", () => {
//       self.buttonPressed();
//     });
//   }
//   buttonPressed() {
//     if (this.state === "关闭") {
//       this.state = "开启";
//       console.log("灯亮了");
//     } else if (this.state === "开启") {
//       this.state = "关闭";
//       console.log("灯灭了");
//     }
//   }
// }

// 使用状态模式下的代码

class Light {
  constructor() {
    this.state = null;
    this.button = null;
    this.init();
  }
  setState(state) {
    this.state = state;
  }
  init() {
    this.offLightState = new offLightState(this);
    this.weakLightState = new weakLightState(this);
    this.strongLightState = new strongLightState(this);
    this.state = this.offLightState;
    this.button = document.createElement("button");
    this.button.innerText = "开关";
    this.button.addEventListener("click", () => {
      this.state.buttonPressed();
    });
    document.body.appendChild(this.button);
  }
}

// 灯光状态父类
class LightState {
  constructor(light) {
    this.light = light;
  }
  buttonPressed(nextState) {
    this.light.setState(nextState);
  }
}

// 关闭状态
class offLightState extends LightState {
  constructor(light) {
    super(light);
    this.name = "关闭状态";
  }
  buttonPressed() {
    console.log("微灯");
    super.buttonPressed(this.light.weakLightState);
  }
}

// 弱光状态
class weakLightState extends LightState {
  constructor(light) {
    super(light);
    this.name = "微光状态";
  }
  buttonPressed() {
    console.log("强灯");
    super.buttonPressed(this.light.strongLightState);
  }
}

// 强光状态
class strongLightState extends LightState {
  constructor(light) {
    super(light);
    this.name = "强光状态";
  }
  buttonPressed() {
    console.log("关灯");
    super.buttonPressed(this.light.offLightState);
  }
}

new Light();
