import { ref } from 'vue'

export let term = ref('term')
export let streams = ref([])
export let loading = ref(false)

export default {
  term,
  streams,
  loading
}