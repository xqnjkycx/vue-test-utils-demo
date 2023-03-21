import { ref, onMounted } from "vue";
import axios from "axios";

export function useCommonHook(options) {
  // increase函数
  const counter = ref(0);
  function increase() {
    counter.value++;
    return counter.value;
  }

  // 获取用户信息
  const user = ref();
  function _fetchUser(id) {
    axios.get(`uses/${id}`).then((res) => {
      user.value = res.data;
    });
  }
  onMounted(() => {
    const { userId } = options.userId;
    _fetchUser(userId);
  });
  return { increase, user };
}
