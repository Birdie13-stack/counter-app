import { ref } from 'vue'
export default function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = 0
  const setValue = (value) => count.value = value;
  return { count, increment, decrement, reset, setValue }
}
