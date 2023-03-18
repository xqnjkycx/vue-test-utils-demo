import { mount } from "@vue/test-utils";
import CompelexForm from "../../../components/compelexForm/index.vue";

test("submit a form", async () => {
  const wrapper = mount(CompelexForm);

  await wrapper.get("[data-test='email']").setValue("name@email.com");
  await wrapper.get("[data-test='description']").setValue("11111");
  await wrapper.get("[data-test='city']").setValue("moscow");
  await wrapper.get("[data-test='subscribe']").setValue();
  await wrapper.get("[data-test='monthly']").setValue();

  await wrapper.get("[data-test='form']").trigger("submit.prevent");

  expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
    email: "name@email.com",
    description: "11111",
    city: "moscow",
    subscribe: true,
    interval: "monthly",
  });
});
