import { mount } from "@vue/test-utils";
import Counter from "../../../components/counter/index.vue";

// 测试按钮点击时会触发increment事件
test("emits an event when clicked", () => {
  const wrapper = mount(Counter);

  const testButton = wrapper.get("[data-test='add-btn']");
  testButton.trigger("click");
  testButton.trigger("click");

  // emitted 返回一个object,object中的每个key 都匹对了一个自定义事件
  expect(wrapper.emitted()).toHaveProperty("increment");
});

test("emits an event with count when click", () => {
  const wrapper = mount(Counter);

  const testButton = wrapper.get("[data-test='add-btn']");
  testButton.trigger("click");
  testButton.trigger("click");

  // emitted() 接收一个参数，它会返回一个数组
  // 数组的内容为自定义事件每次触发的返回结果
  // [ [1] , [2] ]
  const incrementEvent = wrapper.emitted("increment");

  expect(incrementEvent).toHaveLength(2);

  expect(incrementEvent[0]).toEqual([1]);

  expect(incrementEvent[1]).toEqual([2]);
});
