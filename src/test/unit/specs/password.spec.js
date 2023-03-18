import { mount } from "@vue/test-utils";
import Password from "../../../components/password/index.vue";

test("renders an error if length is too short", async () => {
  const wrapper = mount(Password);
  await wrapper.setProps({ minLength: 10 });
  // sorry，这种写法在compositionAPI中不再被支持
  // error : Cannot add property password , object is not extensible
  // await wrapper.setData({ password });
  // 使用 wrapper.vm.password 去替代 setData
  wrapper.vm.password = "123456";

  expect(wrapper.html()).toContain("Password must be at least 10 characters");
});
