import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./style.css";
import "element-plus/dist/index.css";
import App from "./App.vue";

// 引入事件类
import EventBus from "./util/eventBus";
import "./util/status";

const $_bus = new EventBus();

const app = createApp(App);
app.provide("$_bus", $_bus);
app.use(ElementPlus).mount("#app");
