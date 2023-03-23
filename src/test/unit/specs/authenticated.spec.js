import { mount } from "@vue/test-utils";
import Authenticated from "../../../components/authenticated/index.vue";

test("allows authenticated user to edit a post", async () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = mount(Authenticated, {
    props: {
      isAuthenticated: true,
    },
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    },
  });
  await wrapper.find('[data-test="button"]').trigger("click");
  expect(mockRouter.push).toHaveBeenCalledTimes(1);
  expect(mockRouter.push).toHaveBeenCalledWith("/posts/1/edit");
});
