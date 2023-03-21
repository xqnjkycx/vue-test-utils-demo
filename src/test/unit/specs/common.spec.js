import { useCommonHook } from "../../../hooks/common";
import { defineComponent } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";

test("increase on useCommonHook", () => {
  const { increase } = useCommonHook();
  expect(increase()).toBe(1);
  expect(increase()).toBe(2);
});

// mock api 请求
jest.spyOn(axios, "get").mockResolvedValue({ data: { id: 1, name: "User" } });
test("user on useCommonHook", async () => {
  const TestComp = defineComponent({
    props: {
      userId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const options = {
        userId: props.userId,
      };
      const { user } = useCommonHook(options);
      return {
        user,
      };
    },
  });

  const wrapper = mount(TestComp, {
    props: {
      userId: 1,
    },
  });

  expect(wrapper.vm.user).toBeUndefined();
  await flushPromises();
  expect(wrapper.vm.user).toEqual({ id: 1, name: "User" });
});
