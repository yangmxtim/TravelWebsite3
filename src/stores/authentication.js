import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', () => {
  const credCredentials = ref(0)
  const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  
  // return { count, doubleCount, increment }
  return {credCredentials}
})
