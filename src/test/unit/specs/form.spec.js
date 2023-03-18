import { mount } from "@vue/test-utils";
import Form from "../../../components/form/index.vue";

test("sets the value", async () => {
  const wrapper = mount(Form);
  const input = wrapper.get("[data-test='input']");

  await input.setValue("1013695781@qq.com");

  expect(input.element.value).toBe("1013695781@qq.com");
});

test("trigger the submit", async () => {
  const wrapper = mount(Form);

  await wrapper.get("[data-test='submit-btn']").trigger("click");

  expect(wrapper.emitted()).toHaveProperty("submit");
});

test("emits the input to its parent", async () => {
  const wrapper = mount(Form);

  await wrapper.get("[data-test='input']").setValue("my@email.com");

  await wrapper.get("[data-test='submit-btn']").trigger("click");

  expect(wrapper.emitted("submit")[0][0]).toBe("my@email.com");
});

/**
 * 如果需要 一些来自 event 对象里的数据
 * 可以传入额外的数据作为第二参数
 */
test("emits an event only if you lose focus to a button", () => {
  const wrapper = mount(Form);

  const blurButton = wrapper.get("[data-test='submit-btn']");

  wrapper.get("[data-test='input']").trigger("blur", {
    relatedTarget: blurButton.element,
  });

  expect(wrapper.emitted("focus-lost")).toBeTruthy();
});
