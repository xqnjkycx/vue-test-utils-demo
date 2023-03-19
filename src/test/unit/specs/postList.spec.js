import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
import PostList from "../../../components/postList/index.vue";

const mockPostList = [
  {
    id: 1,
    title: "title1",
  },
  {
    id: 2,
    title: "title2",
  },
];

jest.spyOn(axios, "get").mockResolvedValue(mockPostList);

test("loads post on button click", async () => {
  const wrapper = mount(PostList);

  await wrapper.get("button").trigger("click");

  // 设定 axios.get 方法的成功调用次数和正确传入参数
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith("/fake/api");

  await flushPromises();

  const posts = wrapper.findAll('[data-test="post"]');

  expect(posts).toHaveLength(2);
  expect(posts[0].text()).toContain("title1");
  expect(posts[1].text()).toContain("title2");
});

test("display loading state on button click", async () => {
  const wrapper = mount(PostList);

  expect(wrapper.find('[role="alert"]').exists()).toBe(false);
  expect(wrapper.get("button").attributes()).not.toHaveProperty("disabled");

  await wrapper.get("button").trigger("click");

  expect(wrapper.find('[role="alert"]')).toBe(true);
  expect(wrapper.get("button").attributes()).toHaveProperty("disabled");

  await flushPromises();

  expect(wrapper.find('[role="alert"]').exists()).toBe(false);
  expect(wrapper.get("button").attributes()).not.toHaveProperty("disabled");
});
