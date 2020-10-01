import { ref } from 'vue'

export let term = ref('')
export let streams = ref([])
export let platforms = ref([])
export let loading = ref(false)
export let speed = ref(0)

export default {
  term,
  streams,
  platforms,
  loading,
  speed
}