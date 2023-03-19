import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Todo from "../../../components/todo/index.vue";

test("renders a todo", () => {
  const wrapper = mount(Todo);

  const todo = wrapper.get('[data-test="todo"]');

  expect(todo.text()).toBe("Learn Vue.js 3");
});

test("create a todo", async () => {
  const wrapper = mount(Todo);
  expect(wrapper.findAll('[data-test="new-todo"]')).toHaveLength(1);

  await wrapper.get('[data-test="new-todo"]').setValue("New todo");
  await wrapper.get('[data-test="submit-btn"]').trigger("click");

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
});

test("completes a todo", async () => {
  const wrapper = mount(Todo);

  wrapper.get('[data-test="todo-checkbox"]').setValue(true);
  await nextTick();

  expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
});
