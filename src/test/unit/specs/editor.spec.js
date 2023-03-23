import { mount } from "@vue/test-utils";
import Editor from "../../../components/editor/index.vue";

test("modelValue should be updated", async () => {
  const wrapper = mount(Editor, {
    props: {
      modelValue: "initialText",
      "onUpdate:modelValue": (v) =>
        wrapper.setProps({
          modelValue: v,
        }),
    },
  });
  await wrapper.find("input").setValue("test");
  expect(wrapper.props("modelValue")).toBe("test");
});
