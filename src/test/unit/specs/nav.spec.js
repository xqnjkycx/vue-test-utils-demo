import { mount } from "@vue/test-utils";
import Nav from "../../../components/nav/index.vue";

test("renders a profile link", () => {
  const wrapper = mount(Nav);

  const profileLink = wrapper.get("[data-test='profile']");

  expect(profileLink.text()).toEqual("My Profile");
});

test("dont render admin link", () => {
  const wrapper = mount(Nav);

  expect(wrapper.find("[data-test='admin']").exists()).toBe(false);
});

test("dont show an visible link", () => {
  const wrapper = mount(Nav);

  expect(wrapper.find("[data-test='visible']").isVisible()).toBe(false);
});
