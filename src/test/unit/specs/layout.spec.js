import { mount } from "@vue/test-utils";
import Layout from "../../../components/layout/index.vue";

test("layout default slot", () => {
  const wrapper = mount(Layout, {
    slots: {
      default: "Main content",
    },
  });

  expect(wrapper.html()).toContain("Main content");
});

test("layout name slot", () => {
  const wrapper = mount(Layout, {
    slots: {
      main1: `<p>main1</p>`,
      main2: `<p>main2</p>`,
    },
  });
  expect(wrapper.html()).toContain(`<p>main1</p>`);
  expect(wrapper.html()).toContain(`<p>main2</p>`);
});
