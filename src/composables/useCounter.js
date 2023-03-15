import { ref } from "vue";
import { useStore } from "vuex";

export default function useCounter() {
  const store = useStore();

  const increment = () => {
    store.commit("increment");
  };

  const decrement = () => {
    store.commit("decrement");
  };

  const reset = () => {
    store.commit("reset");
  };

  const setValue = (value) => {
    store.commit("setValue", value);
  };

  const count = ref(store.getters.getCount);

  store.watch(
    () => store.getters.getCount,
    (value) => {
      count.value = value;
    }
  );

  return { count, increment, decrement, reset, setValue };
}
