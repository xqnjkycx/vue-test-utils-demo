import { mount } from "@vue/test-utils";
import { defineComponent, inject } from "vue";
import SomeFather from "../../../components/someFather/index.vue";

test("provides fake data", () => {
  const TestComp = defineComponent({
    template: '<span id="provide-test">{{value}}</span>',
    setup() {
      const value = inject("fakeKey");
      return { value };
    },
  });

  const wrapper = mount(SomeFather, {
    global: {
      stubs: {
        SomeChild: TestComp,
      },
    },
  });

  expect(wrapper.find("#provide-test").text()).toBe("fakeValue");
});
